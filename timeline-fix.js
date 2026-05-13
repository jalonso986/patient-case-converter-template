(function () {
  function buildPhaseHTML(tl) {
    var html = '<div style="padding:24px 20px 40px;background:#fff;">';
    html += '<h2 style="font-size:17px;font-weight:700;color:#1a1a1a;margin:0 0 6px">TU PLAN FECHA A FECHA</h2>';
    html += '<p style="font-size:13px;color:#555;margin:0;line-height:1.5">Si empiezas el <span style="color:#2a7c6f;font-weight:600">' + tl.startDate + '</span>, ' + tl.intro + '</p>';
    html += '<div style="position:relative;padding-left:28px;margin-top:20px;">';
    html += '<div style="position:absolute;left:7px;top:8px;bottom:8px;width:2px;background:#e8e8e8;"></div>';
    tl.phases.forEach(function (phase) {
      html += '<div style="position:relative;margin-bottom:14px;">';
      html += '<div style="position:absolute;left:-24px;top:14px;width:14px;height:14px;border-radius:50%;background:' + phase.color + ';z-index:1;"></div>';
      html += '<div style="background:#FAFAFA;border:1px solid #F0F0F0;box-shadow:0 2px 10px rgba(0,0,0,.06);border-radius:10px;padding:14px 16px;">';
      html += '<div style="font-size:14px;font-weight:700;color:#2a7c6f;margin-bottom:5px;">' + phase.date + '</div>';
      html += '<div style="font-size:12px;font-style:italic;color:#777;margin-bottom:8px;line-height:1.5;">' + phase.emotion + '</div>';
      phase.items.forEach(function (item) {
        if (item && item.link) {
          html += '<div style="font-size:13px;color:#333;padding:3px 0;line-height:1.5;"><a href="' + item.link + '" style="color:#2a7c6f;text-decoration:none;">' + item.text + '</a></div>';
        } else {
          html += '<div style="font-size:13px;color:#333;padding:3px 0;line-height:1.5;">' + (typeof item === 'string' ? item : item.text) + '</div>';
        }
      });
      html += '</div></div>';
    });
    html += '</div></div>';
    return html;
  }

  function applyIfNeeded() {
    var el = document.getElementById('timelineScreenContent');
    var tl = window.patientData && window.patientData.timeline;
    if (!el || !tl || !tl.phases || tl.phases.length === 0) return;
    el.innerHTML = buildPhaseHTML(tl);
  }

  document.addEventListener('DOMContentLoaded', function () {
    // Apply immediately to replace init-rendered image
    applyIfNeeded();
    // Patch showScreen so re-applying on every timeline visit
    var orig = window.showScreen;
    if (typeof orig === 'function') {
      window.showScreen = function (screen) {
        orig(screen);
        if (screen === 'timeline') applyIfNeeded();
      };
    }
  });
})();
