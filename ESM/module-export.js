export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const MODULES_BECAME_STANDARD_YEAR = 2015;

export class User {
    constructor(name) {
        this.name = name;
    }
}

export function sayHi(user) {
    console.log(`Hello, ${user}`);
}

export { firstName as x };

export var firstName = "kenan";

export let name1 = "name1", name2 = "name2", name3 = "name3", name4 = "name4";

export const name5 = "name5", name6 = "name6", name7 = "name7";

export var name8 = "name8", name9 = "name9";

export * as GreetingNamespace from './greeting.mjs';//GreetingNamespace.default

export { default as Greeting } from './greeting.mjs';//Greeting

//we can export only one default value;
export default function () { };

// export default function sayGoodbye() { };

// export default 42;
