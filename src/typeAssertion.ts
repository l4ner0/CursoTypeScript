// Type assertion
let channel: any = 'Dominicode';

/* let channelStr = <String>channel; */

let channelStr = channel as String;

const myCanvas = document.getElementById('main');
const myCanvas1 = document.getElementById('main') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement> document.getElementById('main');