/* 
1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

1.2 Elimina el elemento que tenga la clase .fn-remove-me.

1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.

1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.
*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
});
document.body.appendChild(ul);
// 1.2
const elementToRemove = document.querySelector('.fn-remove-me');
if (elementToRemove) {
    elementToRemove.remove();
}
// 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
const ulCars = document.createElement('ul');
cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
})
printHereDiv.appendChild(ulCars);
// 1.4  
const countriesWithImages = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 
countriesWithImages.forEach(country => {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    const img = document.createElement('img');
    img.src = country.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
});
// 1.5
const removeLastButton = document.createElement('button');
removeLastButton.textContent = 'Eliminar último elemento';
removeLastButton.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});
document.body.appendChild(removeLastButton);
// 1.6
const divs = document.querySelectorAll('div');
divs.forEach(div => {
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Eliminar este elemento';
    removeButton.addEventListener('click', () => {
        div.remove();
    });
    div.appendChild(removeButton);
});
