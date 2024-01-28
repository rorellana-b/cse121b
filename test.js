let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

const namesB = names.filter()(names => names.charArt(0) === "B");

console.log(namesB)

const namesLength = names.map((names) => names.length);


names.reduce((total, name1) => total + name1.length, 0) / names.length;