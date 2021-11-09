import * as React from "react";

type RegisterPageProps = {
  //
};

const RegisterPage: React.FC<any> = () => {
  // no side-effect
  // let username = "lek";

  // const [username, setUsername] = React.useState("");
  // const [password, setPassword] = React.useState("");

  interface Account {
    username: string;
    password: string;
    level?: string;
  }

  const [account, setAccount] = React.useState<Account>({
    username: "",
    password: "",
  });

  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        name="username"
        id="username"
        onChange={(e) => setAccount({ ...account, username: e.target.value })}
      />
      <br />
      <input
        type="text"
        name="password"
        id="password"
        onChange={(e) => setAccount({ ...account, password: e.target.value })}
      />
      <br />
      <span>#Debug: {JSON.stringify(account)}</span>
      <br />
      <button onClick={() => alert(JSON.stringify(account))}>Login</button>
    </div>
  );
};

export default RegisterPage;
