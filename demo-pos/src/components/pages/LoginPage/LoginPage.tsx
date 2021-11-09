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
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values));
        }}        
      >
       {props =>(
         <form>
           
         </form>
       ) }

      </Formik>
    </div>
  );
};

export default LoginPage;
