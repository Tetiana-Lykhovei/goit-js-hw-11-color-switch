import css from "./css/style.css";

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
let timerId = null;

refs.startBtn.addEventListener("click", () => {
  refs.startBtn.setAttribute('disabled', ''); 
  refs.startBtn.removeAttribute('enabled');
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)] 
  }, 1000);
});

refs.stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', '');
  refs.startBtn.setAttribute('enabled'); 
  });

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};



