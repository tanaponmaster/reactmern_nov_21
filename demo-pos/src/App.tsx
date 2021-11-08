import React, { ReactElement } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

// // const data = [1,2,3,4,5,6]
// const data = [
//   {title: 'angular', price: 100},
//   {title: 'vuejs', price: 200},
//   {title: 'react', price: 300},
//   {title: 'react', price: "300", tag: 1},
// ]

interface Course {
  title: string;
  price: number;
  tag?: string;
}

interface Props {}

export default function App({}: Props): ReactElement {
  const data: Course[] = [
    { title: "Angular", price: 100, tag: "web" },
    { title: "ReactNative", price: 200, tag: "mobile" },
  ];

  return (
    <div>
      <RegisterPage />
    </div>
  );
}
