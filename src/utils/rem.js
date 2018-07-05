


export default function (){
  let docEl = document.documentElement;
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
  let recalc = function () {
    var clientWidth = docEl.clientWidth;
    if (!clientWidth) return;
    docEl.style.fontSize = (clientWidth / 375) * 20 + 'px';
    return ((clientWidth / 375) * 20)
  };
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvt, recalc, false);
  document.addEventListener('DOMContentLoaded', recalc, false);
  document.body.style.height = docEl.clientHeight + 'px';
  return recalc()
}