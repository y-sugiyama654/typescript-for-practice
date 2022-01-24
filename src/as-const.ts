export {};

let name = 'Yuta';

name = 'Sugiyama';

let nickname = 'Gen' as const;
nickname = 'Gen';

let profile = {
    name: 'Yuta',
    height: 173
} as const;

// profile.name = 'Sugiyama';
// profile.height = 180;