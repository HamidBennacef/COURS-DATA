// Rappel des types de donées
let string = "chaine de caractere";
let number = 25;
let boolean = true;
let maVariable; //Undefined

//tableaux
let array = ["bordeaux", "Toulouse", "Nantes"];
// console.log(array[0][3]);

let array2 = ["bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// console.log(array2 [4].nom );

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJS"],
  admin: false,
};
// objet.adress = "22 rue du code";
// console.log(objet);
let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["CSS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 42,
    technos: ["Php", "React", "NodeJS"],
    admin: true,
  },
];
// console.log(data [2].pseudo [0]);
//-------------------------------
//Les strucures de controle
//------------------------------
if (data[0].age > data[1].age) {
  console.log(data[0].pseudo + "est plus agé que " + data[1].pseudo);
} else {
  // Valeur si faux
}

//while
let w = 0;
while (w < 10) {
  w++;
  console.log("la valeur de w est de : " + w);
}

// Do while
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// les boucles for
for (const user of data) {
  // document.body.innerHTML +=` <li>${user.pseudo} - ${user.age} ans </li>`;
}
// on déclare la valeur de i/ on dit jusqu'ou on boucle / on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log (i);
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>"+ data [i].technos +"</h2>";
}
document.body.addEventListener("click", (e) => {
  e.target.id;
  console.log(e.target.id);
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

//Méthodes String
let string2 = "javascript est un language orienté objet";

// console.log(typeof string2);

// let newString = string2.slice(2);
// let newString = string2.slice(5, 17);

// console.log(newString);

// console.log(string2.split("i"));
// console.log(string2.toLowerCase());
// console.log(string2.toUpperCase());

// console.log(string2.replace("javascript", "php"));

// ------------------
// Méthodes Numbers
// ------------------
let number2 = 42.1234;
let numberString = "42,12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

//Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));

// console.log(Math.floor(Math.random() * 50));

//Méthodes Arrays
//--------------

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];
let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join("-"));

// console.log(newArray.slice(3, 5));

// console.log(array3.indexOf("python"));

// array3.forEach((languages) => console.log(languages));

// console.log(array3.every((language) => language === "php"));
// console.log(array3.some((language) => language === "Php"));

// let shift = array3.shift();
// console.log(array3);

// console.log(array3.pop());

// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT
let arrayNumber = [4, 74, 28, 12, 1];
// console.log(arrayNumber.reduce((x, y) => x + y));
arrayNumber.push(17);
// console.log(arrayNumber);

// IMPORTAAAAAANNNNNNT
// FILTER, SORT, MAP
// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

// document.body.innerHTML = arrayNumber
//   .map((number) => `<li>${number}</li>`)
//   .join("");

// -----------------
// Méthodes Objects
// -----------------
// document.body.innerHTML = data

//   .filter((user) => user.pseudo.includes("a"))
//   .sort((a, b) => b.age - a.age)

//   .map(
//     (user) =>
//       `
// <div class="user-card">
// <h2>${user.pseudo}</h2>
// <p>Age: ${user.age} ans </p>
// <p>Status : ${user.admin ? "modérateur" : "Membre"}</p>
// </div>
// `
//   )
//   .join("");
