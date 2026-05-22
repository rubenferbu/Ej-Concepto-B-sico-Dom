/* 
1.1 Inserta dinamicamente en un html un div vacio con javascript.

1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript.

1.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'.

1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

1.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

1.7 Elimina todos los nodos que tengan la clase .fn-remove-me

1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild.
*/

// 1.1
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);    
// 1.2
const divWithP = document.createElement('div');
const p = document.createElement('p');
divWithP.appendChild(p);
document.body.appendChild(divWithP);
// 1.3
const divWithPs = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    divWithPs.appendChild(p);
}
document.body.appendChild(divWithPs);
// 1.4
const dynamicP = document.createElement('p');   
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 1.5
const h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub'; 
// 1.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');
apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}); 