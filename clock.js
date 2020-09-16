function currentTime() {
  const timeNow = new Date();
  const hour = timeNow.getHours();
  const minute = timeNow.getMinutes();
  const second = timeNow.getSeconds();

  const second_degrees = (second / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${second_degrees}deg)`;
  console.log(second);
}

const secondHand = document.querySelector('.second_hand');

setInterval(currentTime, 1000);
