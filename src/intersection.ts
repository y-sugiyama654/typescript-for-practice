export {};

type Pitcher1 = {
    throwingSpeed: number;
}

type Batter1 = {
    battingAverage: number;
}

// type TwoWayPlayer = {
//     throwingSpeed: number;
//     battingAverage: number;
// }

type TwoWayPlayer = Pitcher1 & Batter1;

const sasaki: Pitcher1 = {
    throwingSpeed: 154
};

const ochiai: Batter1 = {
    battingAverage: 0.367
};

const ootani: TwoWayPlayer = {
    throwingSpeed: 165,
    battingAverage: 0.286
};

