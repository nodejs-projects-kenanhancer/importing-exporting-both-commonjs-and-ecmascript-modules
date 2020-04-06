//if index.js file extension is updated to .mjs, then
//we can import CommonJS modules.

//we can't require CommonJS modules but can import them.
// const greetingService = require('./CJS/greeting-service.js');


//we can import CommonJS modules.
import greetingService from './CJS/greeting-service.js';

import { Person } from './ESM/person.mjs';

import GreetingHelper from './ESM/greeting-helper.mjs';

import Greeting from './ESM/greeting.mjs';


const person = new Person({ firstName: "kenan", lastName: "hancer" });

const greeting = new Greeting({ greetingHelper: new GreetingHelper() });

const helloMessage = greeting.sayHello(person);

console.log(helloMessage);

const goodbyeMessage = greeting.sayGoodbye(person);

console.log(goodbyeMessage);



import { sayHello, sayBye } from './ESM/say.mjs';

console.log(sayHello('Kenan'));

console.log(sayBye('Kenan'));



import { Rectangle } from './ESM/rectangle.mjs';

const rectangle = new Rectangle({ width: 30, heigth: 50 });

console.log(`${rectangle.getName()}`);

console.log();


async function main() {

    //we can import ES modules. We need to use import() method with await.

    const { default: Square } = await import('./ESM/Square.mjs');

    const square = new Square({ length: 40 });

    console.log(`${square.getName()} and area is ${square.Area}`);

}

main();