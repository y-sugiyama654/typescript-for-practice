export {};

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Yuta';
    static lastName: string = 'Sugiyama';

    static work() {
        return `${this.lastName} ${this.firstName} はTypeScriptの勉強中です。`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);
// console.log(me.firstName);
// console.log(me.lastName);

console.log(Me.isProgrammer);
console.log(Me.firstName);
console.log(Me.lastName);

console.log(Me.work());