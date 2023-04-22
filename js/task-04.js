const btnFirstEl = document.querySelector('[data-action="decrement"]');
const btnSecondEl = document.querySelector('[data-action="increment"]');
const countEl = document.getElementById('value');

let countValue = 0;
const decreaseCount = (() => {
    countValue -= 1;
    countEl.textContent = countValue;
});

const increaseCount = (() => {
    countValue += 1;
    countEl.textContent = countValue;
});

btnFirstEl.addEventListener('click', decreaseCount);
btnSecondEl.addEventListener('click', increaseCount);







