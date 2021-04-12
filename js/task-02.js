const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ul = document.querySelector('ul');
 ingredients.forEach(ingredient => {
    const newListEl = document.createElement('li');
    newListEl.textContent = ingredient;
    ul.appendChild(newListEl)
})



