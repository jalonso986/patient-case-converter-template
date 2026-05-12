document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('timelineScreenContent');
  if (!el || !window.patientData || !window.patientData.timeline) return;
  var tl = window.patientData.timeline;
  if (!tl.phases || tl.phases.length === 0) {
    var wrap = document.createElement('div');
    wrap.style.paddingTop = '48px';
    var img = document.createElement('img');
    img.className = 'screen-img';
    img.src = tl.image;
    img.alt = 'Plan completo';
    wrap.appendChild(img);
    el.replaceChildren(wrap);
    return;
  }
  var container = document.createElement('div');
  container.style.cssText = 'padding:24px 20px 40px;background:#fff;';
  var header = document.createElement('div');
  header.style.marginBottom = '20px';
  header.innerHTML = '<h2 style="font-size:17px;font-weight:700;color:#1a1a1a;margin:0 0 6px">TU PLAN FECHA A FECHA</h2><p style="font-size:13px;color:#555;margin:0;line-height:1.5">Si empiezas el <span style="color:#2a7c6f;font-weight:600">' + tl.startDate + '</span>, ' + tl.intro + '</p>';
  container.appendChild(header);
  var timeline = document.createElement('div');
  timeline.style.cssText = 'position:relative;padding-left:28px;';
  var line = document.createElement('div');
  line.style.cssText = 'position:absolute;left:7px;top:8px;bottom:8px;width:2px;background:#e8e8e8;';
  timeline.appendChild(line);
  tl.phases.forEach(function (phase) {
    var phaseEl = document.createElement('div');
    phaseEl.style.cssText = 'position:relative;margin-bottom:14px;';
    var dot = document.createElement('div');
    dot.style.cssText = 'position:absolute;left:-24px;top:14px;width:14px;height:14px;border-radius:50%;background:' + phase.color + ';z-index:1;';
    phaseEl.appendChild(dot);
    var card = document.createElement('div');
    card.style.cssText = 'background:#FAFAFA;border:1px solid #F0F0F0;box-shadow:0 2px 10px rgba(0,0,0,.06);border-radius:10px;padding:14px 16px;';
    var dateEl = document.createElement('div');
    dateEl.style.cssText = 'font-size:14px;font-weight:700;color:#2a7c6f;margin-bottom:5px;';
    dateEl.textContent = phase.date;
    card.appendChild(dateEl);
    var emotionEl = document.createElement('div');
    emotionEl.style.cssText = 'font-size:12px;font-style:italic;color:#777;margin-bottom:8px;line-height:1.5;';
    emotionEl.textContent = phase.emotion;
    card.appendChild(emotionEl);
    phase.items.forEach(function (item) {
      var itemEl = document.createElement('div');
      itemEl.style.cssText = 'font-size:13px;color:#333;padding:3px 0;line-height:1.5;';
      if (item && item.link) {
        var a = document.createElement('a');
        a.href = item.link;
        a.style.cssText = 'color:#2a7c6f;text-decoration:none;';
        a.textContent = item.text;
        itemEl.appendChild(a);
      } else {
        itemEl.textContent = typeof item === 'string' ? item : item.text;
      }
      card.appendChild(itemEl);
    });
    phaseEl.appendChild(card);
    timeline.appendChild(phaseEl);
  });
  container.appendChild(timeline);
  el.replaceChildren(container);
});