function currentTime() {
  const timeNow = new Date();
  const hour = timeNow.getHours();
  const minute = timeNow.getMinutes();
  const second = timeNow.getSeconds();

  const hour_degrees = (hour / 12) * 360 + 90;
  const minute_degrees = (minute / 60) * 360 + 90;
  const second_degrees = (second / 60) * 360 + 90;

  hourHand.style.transform = `rotate(${hour_degrees}deg)`;
  minuteHand.style.transform = `rotate(${minute_degrees}deg)`;
  secondHand.style.transform = `rotate(${second_degrees}deg)`;
  console.log(second);
}

const hourHand = document.querySelector('.hour_hand');
const minuteHand = document.querySelector('.minute_hand');
const secondHand = document.querySelector('.second_hand');

setInterval(currentTime, 1000);
