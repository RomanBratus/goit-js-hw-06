// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.
// -Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// -Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// -Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const idInput = document.querySelector('#validation-input');
console.log(idInput);
const length = Number(idInput.dataset.length);
console.log(length);

idInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === length) {
        idInput.classList.add('valid');
        idInput.classList.remove('invalid');
    } else {
        idInput.classList.add('invalid');
        idInput.classList.remove('valid');
    }
});