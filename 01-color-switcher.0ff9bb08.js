const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body"),timerID:null};function e(r){t.stopBtn.addEventListener("click",n),t.startBtn.removeEventListener("click",e),timerID=setInterval((()=>{t.bodyEl.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}function n(n){clearInterval(timerID),t.startBtn.addEventListener("click",e)}t.startBtn.addEventListener("click",e);
//# sourceMappingURL=01-color-switcher.0ff9bb08.js.map
