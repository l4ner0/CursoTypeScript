// Basic types
let myTypeString: string = 'Hello World!';
let myTypeNumber: number = 33;
let myTypeBoolean: boolean = true;

// Array
let arrayNumber: number[] = [1, 2, 3];
let arrayNumber2: Array<number> = [1, 2, 3];

let arrayString: String[] = ['1', '2'];
let arrayString2: Array<String> = ['Uno', 'Dos'];

let arrayAny: any[] = ['hola', true, 3];
let arrayAny2: Array<any> = [2, 'hola', false];

// Tuple
let tuplaPlayers: [string, number, boolean] = ['Doncic', 5, true];

// Tuple Array
let players: [number, string][];

players = [
    [1, 'Lebron'],
    [2, 'Durand'],
    [3, 'Carry']
];