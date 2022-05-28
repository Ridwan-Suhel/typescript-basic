import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";

let apple: string = "5";
apple = "KG";

let isNum: boolean = true;
console.log(isNum);

let count: number = 10;
count = 5;
console.log(count);

interface StudentStates {
  job: string;
  salary: number;
  age: number;
  isOld: boolean;
}
interface StudentFamily {
  father: string;
  mother: string;
  street: string | number;
  isOld: boolean;
  age?: number;
}

let students: (string | number | StudentStates | StudentFamily)[] = [
  "Rahim, joy, karan, tomal, borsa",
  55,
  35,
  {
    job: "Eng",
    salary: 1000,
    age: 40,
    isOld: true,
  },
  {
    father: "Alex",
    mother: "katy",
    street: 404,
    isOld: true,
  },
];

const handleUser = (
  firstname: string,
  age: number,
  address: string | number
): string => {
  const total: number = 50;
  const result = firstname + age + address;
  return result;
};

function App() {
  return (
    <div className="App">
      <h1>Hello From type script</h1>
      <Counter />
      <Users></Users>
    </div>
  );
}

export default App;
