export {};

// let profile: { name?: string, age?: number } = {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'Yuta', underTwenty: false };

profile.name = 'Yuta';
profile.age = 27;
profile.nationality = 'Japan';
profile.underTwenty = true;

// How to write index signatures
// { [ index: typeForIndex]: typeForValue }