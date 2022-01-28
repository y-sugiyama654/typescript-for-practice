export {};

const debugProfile = (name: string, age: number) => {
    console.log({ name, age });
};

debugProfile('Yuta', 27);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ['Sugiyama', 72];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
) => any 
    ? P 
    : never;
