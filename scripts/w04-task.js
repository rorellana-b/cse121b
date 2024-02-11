/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {

    name: "Ronal Orellana",
    photo: 'images/picture.png',
    favoriteFoods: [
        'Rice and beans',
        'Fried Chiken',
        'Pupusas',
        'Shrimp',
        'Banana Cream Pie'
    ],
    hobbies: [
        'Futbol',
        'Sing',
        'Play the Guitar',
        'Dance',
    ],
    placeslived: [

    ],
};


/* Populate Profile Object with placesLive objects */
myProfile.placeslived.push(
    {
        place: 'El Salvador, Chalatenango',
        length: '30 year',
    },
    {
        place: 'Guatemala, Guatemala',
        length: '1 year',
    }
);


/* DOM Manipulation - Output */
/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').setAttribute('src', myProfile.photo);
document.getElementById('photo').setAttribute('alt',"Myphoto image");

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobie =>{
    let li2 = document.createElement("li");
    li2.textContent = hobie;
    document.querySelector("#hobbies").appendChild(li2);
});

/* Places Lived DataList */
for (let i = 0; i < myProfile.placeslived.length; i++){
    let dt = document.createElement("dt");
    let dd = document.createElement("dd");
    dt.textContent = myProfile.placeslived[i].place;
    dd.textContent = myProfile.placeslived[i].length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
};


