import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';


const input = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const days = document.querySelector("span[data-days]");
const hours = document.querySelector("span[data-hours]");
const minutes = document.querySelector("span[data-minutes]");
const seconds = document.querySelector("span[data-seconds]");
startBtn.addEventListener("click", handleClick);
    function convertMs(ms) {

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
startBtn.disabled = true;
// console.log(startBtn);
// console.log(input);
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
  if (selectedDates[0].getTime() - options.defaultDate.getTime() < 0) {
Notiflix.Notify.failure(
  'Please choose a date in the future',
  {
    timeout: 2000,
  },
);
 startBtn.disabled = true;
} else {
          startBtn.disabled = false;
}
},
};
const flatpickrInstance = flatpickr(input, options);

function handleClick(event) {
  const selectedDate = flatpickrInstance.selectedDates[0];
  const timeObj = convertMs(selectedDate.getTime() - options.defaultDate.getTime());
  console.log(timeObj);

  let getDays = timeObj.days;
  let getHours = timeObj.hours;
  let getMinutes = timeObj.minutes;
  let getSeconds = timeObj.seconds;

  days.textContent = getDays;
  hours.textContent = String(getHours).padStart(2, '0');
  minutes.textContent = String(getMinutes).padStart(2, '0');
  seconds.textContent = String(getSeconds).padStart(2, '0');

  const timerId = setInterval(() => {
    if (getSeconds > 0 || getMinutes > 0 || getHours > 0 || getDays > 0) {
      if (getSeconds === 0) {
        getSeconds = 59;
        if (getMinutes === 0) {
          getMinutes = 59;
          if (getHours === 0) {
            getHours = 23;
            if (getDays > 0) {
              getDays--;
            } else {
              clearInterval(timerId);
            }
          } else {
            getHours--;
          }
        } else {
          getMinutes--;
        }
      } else {
        getSeconds--;
      }

      days.textContent = getDays;
      hours.textContent = String(getHours).padStart(2, '0');
      minutes.textContent = String(getMinutes).padStart(2, '0');
      seconds.textContent = String(getSeconds).padStart(2, '0');
    } else {
      clearInterval(timerId);
      // You might want to add logic for when the countdown reaches zero
    }
  }, 1000);
}