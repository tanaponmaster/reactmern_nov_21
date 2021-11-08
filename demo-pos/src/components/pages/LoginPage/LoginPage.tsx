import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  // no side-effect
  // let username = "lek";

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => {
          // username = e.target.value;
          setUsername(e.target.value);
          console.log(username);
        }}
      />
      <br />
      <input
        type="text"
        name="password"
        id="password"
        onChange={(e) => {
          // username = e.target.value;
          setPassword(e.target.value);
          console.log(password);
        }}
      />
      <br />
      <span>
        #Debug: {username}:{password}
      </span>
      <br />
      <button onClick={() => alert(username)}>Login</button>
    </div>
  );
};

export default LoginPage;
