// Напиши скрипт, який для кожного елемента масиву ingredients:
//
// 1.Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2.Додасть назву інгредієнта як його текстовий вміст.
// 3.Додасть елементу клас item.
// 4.Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
//


const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];

const ingredientsH = document.getElementById("ingredients");
const ulElem = document.createElement("ul");

for (const ingredient of ingredients) {
    const listElem = document.createElement("li");
    listElem.textContent = ingredient;
    ulElem.appendChild(listElem);
}


ingredientsH.appendChild(ulElem)

console.log(ulElem)
