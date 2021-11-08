import * as React from "react";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  // no side-effect
  // let username = "lek";

  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");

  const [account, setAccount] = React.useState<any>({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) =>
          setAccount({ username: e.target.value, password: account.password })
        }
      />
      <br />
      <input
        type="text"
        name="password"
        id="password"
        onChange={(e) =>
          setAccount({ password: e.target.value, username: account.username })
        }
      />
      <br />
      <span>#Debug: {JSON.stringify(account)}</span>
      <br />
      <button onClick={() => alert(JSON.stringify(account))}>Login</button>
    </div>
  );
};

export default LoginPage;
