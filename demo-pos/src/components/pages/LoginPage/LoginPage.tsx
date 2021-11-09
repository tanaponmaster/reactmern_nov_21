import * as React from "react";
import { Formik } from "formik";

type LoginPageProps = {
  //
};

const LoginPage: React.FC<any> = () => {
  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ username: "admin", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
        }}
      >
        {/* destructuring */}
        {({ handleSubmit, values, handleChange }) => (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              id="username"
              onChange={handleChange}
              value={values.username}
            />
            <br />
            <input
              type="text"
              name="password"
              id="password"
              onChange={handleChange}
              value={values.password}
            />
            <br />
            <button>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
