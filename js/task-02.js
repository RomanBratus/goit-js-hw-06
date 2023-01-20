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

let ingredients_list = document.querySelector('#ingredients');

const createIngredients = ingredientsList => {
    return ingredientsList.map(ingredient => {
        const ingredients_item = document.createElement('li');
        ingredients_item.classList.add('item');
        ingredients_item.textContent = ingredient;

        return ingredients_item;
    });
};

const elements = createIngredients(ingredients);
ingredients_list.append(...elements);


