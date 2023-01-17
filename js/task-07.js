// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.


const idInputEl = document.querySelector('#font-size-control');
const idTextEl = document.querySelector('#text');

function chengeFontSize() {
    idTextEl.style.fontSize = idInputEl.value + 'px';
}

chengeFontSize();

idInputEl.addEventListener("input", chengeFontSize);