export {};

let fooCompability: any;
let barCompability: string = 'TypeScript';

console.log(typeof fooCompability);
fooCompability = barCompability;
console.log(typeof fooCompability);

let fooIncompatible: string;
let barIncompatible: number = 1;
 
// 型変換できない
// fooIncompatible = barIncompatible;

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;
console.log(typeof fooString);

let fooNumber: number;
let fooNumberLiteral: 1994 = 1994;
fooNumber = fooNumberLiteral;
console.log(typeof fooNumber);

interface Animal {
    age: number;
    name: string;
}

class Person {
    constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(27, 'yuta');
console.log(typeof me);