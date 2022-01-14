export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const barString: Mojiretsu = 'Hello';

const example1 = {
    name: 'Yuta',
    age: 27
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'Yuta',
    age: 27
};

type Profile2 = typeof example1;