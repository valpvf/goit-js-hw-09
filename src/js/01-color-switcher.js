const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
  bodyEl: document.querySelector('body'),
  timerID: null,
};

refs.startBtn.addEventListener('click', onBtnColorChange);

function onBtnColorChange(evt) {
  refs.stopBtn.addEventListener('click', onBtnColorStop);
  refs.stopBtn.removeAttribute('disabled');
  refs.startBtn.removeEventListener('click', onBtnColorChange);
  refs.startBtn.setAttribute('disabled', '');
  timerID = setInterval(() => {
    refs.bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function onBtnColorStop(evt) {
  clearInterval(timerID);
  refs.startBtn.addEventListener('click', onBtnColorChange);
  refs.stopBtn.setAttribute('disabled', '');
  refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
