import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix';

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  timerEl: document.querySelector('.timer'),
  tablo: document.querySelectorAll('.value'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < options.defaultDate) {
      return Notify.failure('Please choose a date in the future');
    }
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.addEventListener('click', onTimerStart);
  },
};

let calendar = flatpickr('#datetime-picker', options);

function onTimerStart(evt) {
  refs.startBtn.setAttribute('disabled', '');
  const timerID = setInterval(() => {
    let interval = calendar.latestSelectedDateObj - Date.now();
    if (interval < 1) {
      clearInterval(timerID);
      interval = 0;
    }
    const time = convertMs(interval);
    const arr = Object.keys(time);
    for (let i = 0; i < arr.length; i++) {
      refs.tablo[i].firstChild.textContent = addLeadingZero(
        Object.values(time)[i]
      );
    }
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
