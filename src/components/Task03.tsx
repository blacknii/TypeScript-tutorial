const stringArr = ["one", "hey", "Dave"];

let guitars = ["Strat", "Les Paul", 5150];

const mixedData = ["EVH", 1984, true];

stringArr[0] = "John";
stringArr.push("hey");

guitars[0] = 1882;
guitars.unshift("Jim");

guitars = stringArr;
// guitars = mixedData;

// const test = [];
const bands: string[] = [];
bands.push("Van Halen");
// bands.push(true);

// Tuple

const myTuple: [string, number, boolean] = ["Dave", 42, true];

let mixed = ["John", 1, false];

mixed = myTuple;

// myTuple = mixed;

// Objects

let myObj: object;
myObj = [];
console.log({ myObj });
myObj = bands;
console.log({ myObj });
myObj = {};
console.log({ myObj });

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "John";
exampleObj.prop2 = false;

interface Guitarist {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 5150, "OU812"],
};

const JP: Guitarist = {
  name: "Jimmy",
  albums: ["I", "II", "IV"],
};

evh = JP;

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}`;
};

console.log(greetGuitarist(evh));

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

const Task03 = () => {
  return (
    <div>
      <p>{mixedData.map((e) => `${e} `)}</p>
      <p>{myTuple.map((e) => `${e} `)}</p>
      <p>{mixed.map((e) => `${e} `)}</p>
      <p>{evh.name}</p>
    </div>
  );
};

export default Task03;
