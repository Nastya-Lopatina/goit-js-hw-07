const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsListEl = document.getElementById('ingredients');

 ingredients.map(ingredient => {
   
  const newItemEl = document.createElement('li');
  
    newItemEl.innerHTML = ingredient;
  
  ingredientsListEl.append(newItemEl);

    
  })
  


