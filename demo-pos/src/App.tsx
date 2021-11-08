import React, { ReactElement } from "react";
import LoginPage from "./components/pages/LoginPage/";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <div>
      <LoginPage />
    </div>
  );
}
