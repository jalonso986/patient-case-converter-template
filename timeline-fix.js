document.addEventListener('DOMContentLoaded',function(){
  var el=document.getElementById('timelineScreenContent');
  if(!el||!window.patientData||!window.patientData.timeline)return;
  var wrap=document.createElement('div');
  wrap.style.paddingTop='48px';
  var img=document.createElement('img');
  img.className='screen-img';
  img.src=window.patientData.timeline.image;
  img.alt='Plan completo';
  wrap.appendChild(img);
  el.replaceChildren(wrap);
});
