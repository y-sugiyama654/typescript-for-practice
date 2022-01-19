export {};

class Person{

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

let yuta = new Person('Yuta', 27);
console.log(yuta.profile());


