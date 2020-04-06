//we can require CommonJS modules but can't import them.
const greetingService = require('./CJS/greeting-service.js');

async function main() {

    //we can import ES modules. We need to use import() method with await.
    const { Person } = await import('./ESM/person.mjs');

    const { default: GreetingHelper } = await import('./ESM/greeting-helper.mjs');

    const { default: Greeting } = await import('./ESM/greeting.mjs');

    const person = new Person({ firstName: "kenan", lastName: "hancer" });

    const greeting = new Greeting({ greetingHelper: new GreetingHelper() });

    const helloMessage = greeting.sayHello(person);

    console.log(helloMessage);

    const goodbyeMessage = greeting.sayGoodbye(person);

    console.log(goodbyeMessage);






    const { sayHello, sayBye } = await import('./ESM/say.mjs');

    console.log(sayHello('Kenan'));

    console.log(sayBye('Kenan'));



    const {
        months,
        MODULES_BECAME_STANDARD_YEAR,
        User,
        sayHi
    } = await import('./ESM/module-export.mjs');






    const { default: Square } = await import('./ESM/Square.mjs');

    const square = new Square({ length: 40 });

    console.log(`${square.getName()} and area is ${square.Area}`);






    const { Rectangle } = await import('./ESM/rectangle.mjs');

    const rectangle = new Rectangle({ width: 30, heigth: 50 });

    console.log(`${rectangle.getName()}`);

    console.log();
}

main();