const prompt = require("prompt-sync")();

function conversionKelvin(celsius){
    let kelvin = Number(celsius) + 273.15;
    return kelvin;
}
function conversionFahrenheit(celsius){
    let fahrenheit = (Number(celsius)*(9/5))+32
    return fahrenheit;
}

let temperatura = prompt("Ingrese la temperatura en grados celsius: ");
console.log("Temperatura en grdos kelvin: ", conversionKelvin(temperatura));
console.log("Temperatura en grdos fahrenheit: ", conversionFahrenheit(temperatura));

