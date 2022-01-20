export {};

class Person {
    constructor(public name: string, protected age: number) {}
}

const me = new Person('Yuta', 27);

console.log(me);