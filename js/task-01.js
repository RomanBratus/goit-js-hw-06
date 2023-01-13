// Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку
// елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categoriesEl = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((element) => {
    console.log(`Category:${element.querySelector("h2").textContent}`);
    console.log(`Element:${element.querySelectorAll("h2 + ul > li").length}`);
})



