const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

function toBase64(filePath) {
  try {
    const abs = path.resolve(__dirname, filePath);
    const data = fs.readFileSync(abs);
    const ext = path.extname(filePath).slice(1).replace('jpg', 'jpeg');
    return `data:image/${ext};base64,${data.toString('base64')}`;
  } catch(e) {
    return null;
  }
}

(async () => {
  const dataJs = fs.readFileSync(path.resolve(__dirname, 'data.js'), 'utf8');
  const patientData = eval(dataJs + '; patientData');

  const images = {
    logo: toBase64('assets/logo-Araujo.jpeg'),
    photo: patientData.patient.photo ? toBase64(patientData.patient.photo) : null,
    calendar: toBase64('assets/icon-og-calendar.png'),
    implant: toBase64('assets/icon-og-implant.png'),
    euro: toBase64('assets/icon-og-euro.png'),
    shield: toBase64('assets/icon-og-shield.png'),
  };

  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });

  const filePath = 'file://' + path.resolve(__dirname, 'og-preview.html');
  await page.goto(filePath, { waitUntil: 'networkidle2', timeout: 20000 });

  await page.evaluate((imgs, pd) => {
    const firstName = pd.patient.name.split(' ')[0];
    document.getElementById('patient-name').textContent = firstName + ',';

    if (imgs.logo) document.getElementById('logo').src = imgs.logo;

    const photoEl = document.getElementById('patient-photo');
    const placeholderEl = document.getElementById('photo-placeholder');
    if (imgs.photo && photoEl) {
      photoEl.src = imgs.photo;
      photoEl.style.display = 'block';
      if (placeholderEl) placeholderEl.style.display = 'none';
    }

    if (imgs.calendar) document.getElementById('icon-badge-calendar').src = imgs.calendar;
    if (imgs.calendar) document.getElementById('icon-calendar').src = imgs.calendar;
    if (imgs.implant) document.getElementById('icon-implant').src = imgs.implant;
    if (imgs.euro) document.getElementById('icon-euro').src = imgs.euro;
    if (imgs.shield) document.getElementById('icon-shield').src = imgs.shield;
  }, images, patientData);

  await new Promise(r => setTimeout(r, 500));

  await page.screenshot({
    path: 'assets/og-preview.png',
    clip: { x: 0, y: 0, width: 1200, height: 630 }
  });

  await browser.close();
  console.log('OG preview generated successfully.');
})();
