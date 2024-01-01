(()=>{"use strict";const s={icon:null,selected:null,audio:new Audio};function n(n){n.preventDefault();const t=n.target.closest(".button"),e=t.querySelector(".svg"),a=t.dataset.parent;s.selected!==a&&(s.audio.src=`./assets/sounds/${a}.mp3`,s.selected=a),!0===s.audio.paused?(s.audio.play(),s.icon=e.src,e.src="./assets/icons/pause.svg"):(s.audio.pause(),e.src=s.icon)}function t(n){s.audio.volume=n.target.value/100}!function(){document.querySelector("#root").innerHTML='\n  <div class="wrapper">\n    <h1 class="title">Weather sound</h1>\n    <main class="sounds">\n      <button class="button" data-parent="summer">\n        <img src="./assets/summer-bg.jpg" class="background">\n        <img src="./assets/icons/sun.svg" class="svg">\n      </button>\n      <button class="button" data-parent="rain">\n        <img src="./assets/rainy-bg.jpg" class="background">\n        <img src="./assets/icons/cloud-rain.svg" class="svg">\n      </button>\n      <button class="button" data-parent="winter">\n        <img src="./assets/winter-bg.jpg" class="background">\n        <img src="./assets/icons/cloud-snow.svg" class="svg">\n      </button>\n    </main>\n    <input type="range" class="input">\n    <img src="./assets/summer-bg.jpg" class="background">\n  </div>\n  ';const s=document.querySelectorAll(".button"),e=document.querySelector(".input");s?.forEach((s=>s.addEventListener("click",n))),e.addEventListener("input",t)}()})();