
import Notiflix from 'notiflix';
const form = document.querySelector(".form")
const btn = document.querySelector("#btn")
console.log(btn);
btn.disabled = false;



form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
  event.preventDefault(); 
    btn.disabled = true;
  btn.disabled = true;
  const delayValue = +form.delay.value;
  const stepValue = +form.step.value;
  const amountValue = +form.amount.value;

  for (let i = 1, delay =delayValue; i <= amountValue; i += 1, delay += stepValue){
    setTimeout(() => {
      const promise = createPromise(i, delay)

      promise.then(({ position, delay }) => {
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
        

        })
        .finally(() => {
          // Enable the button when all promises have settled
          if (i === amountValue) {
            btn.disabled = false;
            // Reset the form fields
            form.reset();
          }
        })
},delay)

}

  

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

