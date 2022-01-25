export {};

// Partial(任意)
type Profile = {
    name: string;
    age: number;
    zipCode: number;
};

type PartialaType = Partial<Profile>;


// Required(必須)
type Profile2 = {
    name: string;
    age?: number;
    zipCode: number;
};

type RequiredType = Required<Profile>;