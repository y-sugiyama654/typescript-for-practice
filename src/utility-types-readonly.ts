export {};

type Profile = {
    name: string;
    age: number;
};

const me: Profile = {
    name: 'Yuta',
    age: 27,
}

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
    name: 'Neko',
    age: 5,
};

// readonlyだからプロパティを上書きできない
// friend.age++;

type YomitoriSenyo<T> = { readonly [P in keyof T]: T[P]; };
type YomitoriSenyoProfile = YomitoriSenyo<Profile>;