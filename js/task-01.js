const categoriEselements = document.querySelectorAll('.item');

const getCategoriesList = function (elements) {
    console.log(`В списке ${elements.length} категории.`);
}

const getCategoryEl = function (elements) {
    elements.forEach(element => {
        const elementTitle = element.firstElementChild.textContent;
        const elementList = element.querySelectorAll('li');

        return console.log(
            (`
            Категория: ${elementTitle}
            Количество элементов: ${elementList.length} `)
        )
        
    });
}


getCategoriesList(categoriEselements)
getCategoryEl(categoriEselements)