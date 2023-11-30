
import Notiflix from 'notiflix';
const form = document.querySelector(".form")




form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault(); 
  const delayValue = +form.delay.value;
  const stepValue = +form.step.value;
  const amountValue = +form.amount.value;
  for (let i = 1, delay =delayValue; i <= amountValue; i += 1, delay += stepValue){
    setTimeout(() => {
      createPromise(i, delay)
    .then(({ position, delay }) => {
      // console.log(` Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(
  ` Fulfilled promise ${position} in ${delay}ms`,

);
  })
        .catch(({ position, delay }) => {
     Notiflix.Notify.failure(
  ` Rejected promise ${position} in ${delay}ms`,
 
);
    // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
},delay)


  }
  function createPromise(position, step) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
  
    return Promise.resolve({
      position: position,
      delay: step

    });
  }
  else {
  
          return Promise.reject({
            position: position,
            delay: step
          });

    }
    }


}





//   if (selectedDates[0].getTime() - options.defaultDate.getTime() < 0) {
// Notiflix.Notify.failure(
//   'Please choose a date in the future',
//   {
//     timeout: 2000,
//   },
// );
//  startBtn.disabled = true;
// } else {
//           startBtn.disabled = false;
// }

