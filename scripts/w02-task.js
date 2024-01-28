/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ronal Orellana';
let currentYear = new Date().getFullYear();
let profilePicture = 'images/picture.png';



/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `<strong>${currentYear}<strong>`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of profilePicture')


/* Step 5 - Array */

let food = ['Pizza','Hot Dog','Spaguetti'];

foodElement.innerHTML = food;
//adding new element
let anotherFood = "chicken";
food.push(anotherFood);
foodElement.innerHTML+= `<br>${food}`;
//delete first element
food.shift();
foodElement.innerHTML+= `<br>${food}`;
//delete last element
food.pop();
foodElement.innerHTML+= `<br>${food}`;










