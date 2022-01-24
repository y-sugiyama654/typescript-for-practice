export {};

let name: any = 'Yuta';
// 推奨
let length = (name as string).length;

// 非推奨
// let length = (<string>name).length;

// length = 'fogegoge';
console.log(length);