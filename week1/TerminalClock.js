// Create a Terminal Clock (HH:MM:SS) -->

function displayClock() {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const time = `${hours} : ${minutes} : ${seconds}`;
  console.log(time);
}

setInterval(displayClock, 1000);
