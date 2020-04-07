// Exporting individual features
export var name1 = "name1";
export let name2 = "name2";
export const name3 = "name3";

export var name4 = "name4", name5 = "name5", name6 = "name6";
export let name7 = "name7", name8 = "name8", name9 = "name9";
export const name10 = "name10", name11 = "name11", name12 = "name12";

export function function1() { }
export function function2() { }

export class Class1 { }
export class Class2 { }

const firstName = "kenan", lastName = "Hancer";

export { firstName, lastName };

const person = { firstName: "kenan", lastName: "hancer" };

export const { firstName: firstName__, lastName: lastName__ } = person;

// Renaming exports
export { name1 as name_1, name2 as name_2, name3 as name_3 };