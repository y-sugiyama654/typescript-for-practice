export {};

class Person{

    public name: string;
    public age: number;
    protected nationality: string;

    constructor(name: string, age: number, nationality: string) {
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

class Android extends Person {

    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }  

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let yuta = new Person('Yuta', 27, 'Japan');
console.log(yuta.name);
// console.log(yuta.age);
console.log(yuta.profile());


