"use strict";
// Functions
function greet(name = 'User') {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}
greet('Dominicode');
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitud & Longitud are: LAT ${position.lat} LONG: ${position.long}`);
}
printPosition({ lat: 56 });
