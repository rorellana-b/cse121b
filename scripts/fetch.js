// fetch.js
// declare and inicitalizaition of variables 
const url = "https://jsonplaceholder.org/users";
let results = null;
async function getUsers(URL) {
  const response = await fetch(URL);
  //check to see if the fetch was successful
  if (response.ok) { 
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    //doStuff(data);
    console.log(data);
    displayUSers(data);
  }
}
function displayUSers(data) {
  const outputElement = document.querySelector("ul");

  data.forEach(element => {
    const listItem = document.createElement("li");
    listItem.textContent = `${element.firstname} | ${element.lastname} | ${element.birthDate}`;
    outputElement.appendChild(listItem);
  });
    
  }

getUsers(url);
