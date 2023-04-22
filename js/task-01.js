const categoriesList = document.getElementById('categories');
console.log('categoriesList', categoriesList);

const newArray = categoriesList.children;
console.log(`Number of categories: ${newArray.length}`);

const underCategoriesList = categoriesList.querySelectorAll('.item');
underCategoriesList.forEach(item => {
    const titleRef = item.querySelector('h2').textContent;
    const titleNumberRef = item.querySelectorAll('li').length;
    console.log(`Category: ${titleRef}`);
    console.log(`Elements: ${titleNumberRef}`);
});
