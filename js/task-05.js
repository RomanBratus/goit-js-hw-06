// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".


const idInput = document.querySelector('#name-input');
console.log(idInput);
const outputEl = document.querySelector('#name-output');
console.log(outputEl);

idInput.addEventListener("input", (event) => {
    if (event.currentTarget.value === "") {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = event.currentTarget.value;
    }
});