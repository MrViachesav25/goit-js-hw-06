function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtnClEl = document.querySelector('.change-color');
const spanClEl = document.querySelector('.color');
const bodyClEl = document.querySelector('body');

changeBtnClEl.addEventListener('click', () => {
  spanClEl.textContent = getRandomHexColor();
  bodyClEl.style.backgroundColor = spanClEl.textContent;
});
