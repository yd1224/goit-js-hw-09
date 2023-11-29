const btn = document.querySelector('[type="submit"]')
const form = document.querySelector(".form")




form.addEventListener("submit", handleInput)
function handleInput(event) {
    event.preventDefault(); 
  const delayValue = form.delay.value;
  const stepValue = form.step.value;
  const amountValue = form.amount.value;
  console.log(delayValue, stepValue, amountValue);

  setInterval((delayValue,stepValue ) => {
    createPromise(amountValue, stepValue)
  },amountValue)
}


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
