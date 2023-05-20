const helado = 100;

let topping = "Kinder";
let precio;
let precioFinal;




if(topping == "Oreo") {
    precio = 10;
} else if(topping == "KitKat") {
    precio = 15;
} else if(topping == "Kinder") {
    precio = 25;
} else {
    console.log("No tenemos ese topping")
}

precioFinal = precio + helado;

console.log("El helado cuesta $" + precioFinal);

let expr= "Verdura";
switch (expr) {
case 'Carne' :
console.log ("Vino tinto.");
break;
case 'Pescado':
console.log("Vino blanco.");
break;
case "Verdura":
console.log ("Agua.");
break
default:
console. log("Elija carne, pescado o verdura.");
}

let comida =["Carne", "Pescado", "Verdura"];
console.log(comida);
console.log(comida[0]);
console.log(comida[2]);
console.log("Cantidad de comida:", comida.length);
for(let i = 0; i< comida.length; i++){
console.log(comida[i])
}

let comida2 = ["Carne", "Pescado", "Verdura"];
let vuelta = 50;

comida2.push("Cerdo");


console.log(comida2);

console.log("Usted comio mucho: " + comida2[2]);

let count = 50;
while (count > 11) {
console.log("numero es más chico que 11");
count = count -1
}