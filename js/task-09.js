//Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на
// button.change-color і виводить значення кольору в span.color.]
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body');
console.log(bodyEl);
const colorEl = document.querySelector('.color');
console.log(colorEl);
const button = document.querySelector('.change-color');
console.log(button);

const handleClick = event => {
    console.log(event);
    const colorChenge = getRandomHexColor();
    bodyEl.style.backgroundColor = colorChenge;
    button.innerHTML = colorChenge;
};

button.addEventListener("click", handleClick);