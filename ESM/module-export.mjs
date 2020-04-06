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