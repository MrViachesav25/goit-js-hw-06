const formLoginEl = document.querySelector('.login-form');
const inputEmailEl = document.querySelector('[type="email"]');
const inputPasswordEl = document.querySelector('[type="password"]');
formLoginEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const elements = {
        email: inputEmailEl.value,
        password: inputPasswordEl.value
    }
    if(inputEmailEl.value === '' || inputPasswordEl.value === '') {
        return alert(`Всі поля мають бути заповнені!!!!!`);
    }
    console.log(elements);
    formLoginEl.reset();
});


