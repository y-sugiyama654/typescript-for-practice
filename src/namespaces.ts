export {};

namespace Japanese {
    export class Person {
        constructor(public name: string) {}
    }
}

namespace English {
    export class Person {
        constructor(
            public firstName: string, 
            public middleName: string, 
            public lastName: string
        ) {}
    }
}

namespace Japanese {
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

const me = new Japanese.Person('Yuta');
console.log(me.name);

const jack = new English.Person('Michael', 'Doew', 'Jack');
console.log(jack.firstName);

const tokyoBoy = new Japanese.Tokyo.Person('Koike');
console.log(tokyoBoy.name);
const osakaBoy = new Japanese.Tokyo.Person('Matsui');
console.log(osakaBoy.name);