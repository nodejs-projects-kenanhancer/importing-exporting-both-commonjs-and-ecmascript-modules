async function main() {

    const { Person } = await import('./person.mjs');

    const { default: GreetingHelper } = await import('./greeting-helper.mjs');

    const { default: Greeting } = await import('./greeting.mjs');

    const person = new Person({ firstName: "kenan", lastName: "hancer" });

    const greeting = new Greeting({ greetingHelper: new GreetingHelper() });

    const helloMessage = greeting.sayHello(person);

    console.log(helloMessage);

    const goodbyeMessage = greeting.sayGoodbye(person);

    console.log(goodbyeMessage);






    const { sayHello, sayBye } = await import('./say.mjs');

    console.log(sayHello('Kenan'));

    console.log(sayBye('Kenan'));



    const {
        months,
        MODULES_BECAME_STANDARD_YEAR,
        User,
        sayHi
    } = await import('./module-export.mjs');






    const { default: Square } = await import('./Square.mjs');

    const square = new Square({ length: 40 });

    console.log(`${square.getName()} and area is ${square.Area}`);






    const { Rectangle } = await import('./rectangle.mjs');

    const rectangle = new Rectangle({ width: 30, heigth: 50 });

    console.log(`${rectangle.getName()}`);

    console.log();
}

main();