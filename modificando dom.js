console.log("Archivo modificando dom funcionando OK");

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const createDiv = document.createElement("div");
document.body.appendChild(createDiv)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const createDiv1 = document.createElement("div");
document.body.appendChild(createDiv1);
const createp = document.createElement("p");
createDiv1.appendChild(createp);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const createDiv2 = document.createElement("div");
document.body.appendChild(createDiv2);

for (let i = 0; i < 6; i++) {
    let sixp = document.createElement("p")
    createDiv2.appendChild(sixp)
};

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const createp1 = document.createElement("p");
createp1.textContent = "Soy dinamico";
document.body.appendChild(createp1);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insert = document.createElement("h2");
document.body.appendChild(insert);
insert.classList.add("fn-insert-here");
insert.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newUl = document.createElement("ul");
document.body.appendChild(newUl);

for (const app of apps) {
    const newLi = document.createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
}


// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const removeClass = document.querySelectorAll (".fn-remove-me");
console.log(removeClass);
for (const remu of removeClass) {
    remu.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.

let p3 = document.createElement("p");
p3.textContent = "Aquí voy!";
div = document.querySelectorAll("div");
document.body.insertBefore(p3, div[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

let insertP = document.querySelectorAll(".fn-insert-here");
for (let insert of insertP) {
  let newAddP4 = document.createElement("p");
  newAddP4.textContent = "Voy dentro!";
  insert.appendChild(newAddP4);
}