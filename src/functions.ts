// Functions
function greet (name: String = 'User'): void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet('Dominicode');

function getNumber(): number {
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());

function printPosition(position: {lat: number | String, long?: number}): void {
    console.log(`Latitud & Longitud are: LAT ${position.lat} LONG: ${position.long}`);
}

printPosition({lat: 56});