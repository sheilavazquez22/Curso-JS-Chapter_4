// -- Function Expression 
// const speak = function(){
//     console.log('Good Day!');
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();

// -- Function Declaration
// function greet(){
//     console.log('Hola mundo');
// }

// -- Arguments & Parameters 

// const speak = function(name = 'Armando', time = 'Noches'){
//     console.log(`Buenas ${time} ${name}`);
// };

// speak();
// speak('Adrian');

// -- Regular Function

// const CalculaArea = function(radius){
//     return 3.14 * radius**2;
// };

// -- Arrow Function 
// const CalculaArea = (radius) => 3.14 * radius**2;

// const Area = CalculaArea (5); 
// console.log('El area es: ', Area);

// -- Practice Arrow Fuctions 

// const greet = function(){
//     return 'Buenos dias';
// };

// const greet = () => 'Buenos dias';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10,15,30],0.2));

// const name = 'Sheila';
// -- Function 
// const greet = () => 'Hola';

// let resultOne = greet();
// console.log(resultOne);

// -- Methods

// let resultTwo = name.toUpperCase();
// console.log(resultTwo);

// --Callbacks & Foreach

// const myFunc = (callbackFunc) => {
//     //Do something 
//     let value = 50;
//     callbackFunc(value);
// };

// myFunc(value => {
//     //Do something 
//     console.log(value);
// });

// let amigos = ['Jhoedy','Adrian','Armando','Artemio','Sheila'];

// const logAmigos = (person, index) => {
//     console.log(`${index} - hola ${person}`);
// }
// amigos.forEach(logAmigos);

// -- Get a Reference to the 'ul'
const ul = document.querySelector('.amigos');
const amigos = ['Jhoedy','Adrian','Armando','Artemio','Sheila'];

let html = ``;
amigos.forEach(person =>{
    //Create html template 
    html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;