export {};

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let yuta = new Person('Yuta', 27);
console.log(yuta);

type PersonType = typeof Person;

type Profile = ConstructorParameters<PersonType>;

const profile: Profile = ['sugiyama', 72];
const sugiyama = new Person(...profile);

console.log(sugiyama);

type MyConstructorParameters<T extends abstract new (...args: any) => any> = T extends abstract new (
    ...args: infer P) => any 
    ? P 
    : never;