import * as React from "react";

type LoginPageProps = {
  //
};


const LoginPage: React.FC<any> = () => {
  return (
    <div>
      <h1>Login</h1>
      <input type="text" name="username" id="username" />
      <br />
      <input type="text" name="password" id="password" />
      <br />
      <button onClick={()=>{alert("Login")}} >Login</button>
    </div>
  );
};

export default LoginPage;
