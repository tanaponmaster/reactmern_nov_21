import React, { ReactElement } from "react";
import LoginPage from "./components/pages/LoginPage/";
import RegisterPage from "./components/pages/RegisterPage/";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <div>
      <LoginPage />
      <RegisterPage />
    </div>
  );
}
