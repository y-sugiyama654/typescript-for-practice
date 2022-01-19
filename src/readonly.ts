export {};

class VisaCard {

    constructor(public readonly owner: string) {
    }
}

let myVisaCard = new VisaCard('Yuta');
console.log(myVisaCard.owner);