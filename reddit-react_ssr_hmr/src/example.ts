// Задание 1

const str1 = "Hello";
const str2 = "World";
function sum(str1: string, str2: string) {
  const result = str1 + str2;
  return result;
}

// Задание 2

interface HomeTask {
  howIDoIt: string;
  simeArray: [string, string, number];
  withData: [{ howIDoIt: string; simeArray: [string, number] }];
}

const MyHometask: HomeTask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
};

// Задание 3

const myArr: MyArr<number> = [10, 25, 42];

interface MyArr<T> {
  [N: number]: T;
  reduce<U>(fn: (a: T, v: T) => U): U;
}

const initialValue = 0;
myArr.reduce((a, v) => a + v);

// Задание 4

interface IHomeTask {
  data: string;
  numbericData: number;
  date: Date;
  externalData: {
    basis: number;
    value: string;
  };
}

const homeTask: MyPartial<IHomeTask> = {
  externalData: {
    basis: 42,
    value: "win",
  },
};

type MyPartial<T> = {
  [N in keyof T]?: T[N];
};
