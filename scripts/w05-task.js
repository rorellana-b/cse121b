/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElemet = document.querySelector("div");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const content = document.createElement("article");
        const tempName = document.createElement("h3");
        tempName.textContent = temple.templeName;
        const templeImage = document.createElement('img');
        templeImage.setAttribute('src', temple.imageUrl);

        //templeImage.setAttribute('alt', temple.location);

        content.appendChild(tempName);
        content.appendChild(templeImage);
        templesElemet.appendChild(content);
    });

}
/* async getTemples Function using fetch()*/

const getTemples = async() => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

    if (response.ok){
        const templeList = await response.json();

        /* Event Listener */
        document.querySelector("#filtered").addEventListener("change", () => {
            filterTemple(templeList);
        })

        console.log(templeList);
        displayTemples(templeList);
    }
    
   
}
/* reset Function */
function reset(){
    templesElemet.innerHTML = "";
}

/* filterTemples Function */
function filterTemple(temples){
    reset();

    let filter = document.getElementById('filtered').value; 

    switch (filter) {
        case 'utah':
            let utahTemples = temples.filter(temple => temple.location.includes('Utah'));
            displayTemples(utahTemples);
            break;
        case 'nonutah':
            let outSideTemples = temples.filter(temple => !temple.location.includes('Utah'));
            displayTemples(outSideTemples);
            break;
        case 'older':
            let older = temples.filter(temple => new Date(temple.dedicated)< new Date (1950, 0 , 1));
            displayTemples(older);
            break;
        case 'all':
            displayTemples(temples);
            break;
        default:
            break;
    }

}


getTemples();

