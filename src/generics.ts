import { Agent } from "http";

export {};

// 型が異なる関数を共通化したい => ジェネリクス型 
// const echo = (arg: number): number => {
//     return arg;
// }

// const echo = (arg: string): string => {
//     return arg;
// }

const echo = <T>(arg: T): T => {
    return arg;
}

console.log(echo<number>(100));
console.log(echo<string>('Hello World'));
console.log(echo<boolean>(true));

class Mirror<T> {
    constructor(public value: T) {}

    echo(): T {
        return this.value;
    }
}

console.log(new Mirror<number>(123).echo());
console.log(new Mirror<String>('Hello World').echo());
console.log(new Mirror<boolean>(true).echo());