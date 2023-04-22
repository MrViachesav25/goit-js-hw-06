
const refs = {
    input: document.querySelector("#name-input"),
    output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInputChange);

function onInputChange(event) {
    const inputValue = event.currentTarget.value.trim();
    refs.output.textContent = inputValue ? inputValue : "Anonymous";
}