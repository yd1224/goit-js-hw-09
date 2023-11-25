const startBtn = document.querySelector('button[data-start]');
  const stopBtn = document.querySelector('button[data-stop]');
  const body = document.querySelector("body");
  let intervalId; 

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

  function getInterval() {
    intervalId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
      startBtn.disabled = true;
    }, 1000);
  }

  startBtn.addEventListener("click", handleClick);
  stopBtn.addEventListener("click", handleClick);

  function handleClick(event) {
    if (event.target === startBtn) {
      getInterval();
    } else if (event.target === stopBtn) {
      clearInterval(intervalId);
      startBtn.disabled = false; 
    }
  }
