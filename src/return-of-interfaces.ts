export {};

class Wizard {}
class Monk {}

class Taro extends Wizard {}

interface Saga {
    ionazun(): void;
}
interface Warrior {
    attack(): void;
}

class Jiro implements Saga, Warrior {
    ionazun(): void {
        console.log('ionazun');
    }

    attack(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.attack();