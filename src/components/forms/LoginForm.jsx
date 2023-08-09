import { Formik, Form } from "formik";
import * as yup from "yup";
import AuthField from "./AuthField";
import AuthButton from "./AuthButton";
const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = yup.object({
    username: yup.string("username is requireed").required("required"),
    password: yup.string("password is requireed").required("required"),
  });
  const onSubmit = (values) => {
    console.log("login", values);
  };

  return (
    <div className="bg-white shadow-lg w-1/4 rounded-lg p-3 text-center">
      Login
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <AuthField
              label={"username:"}
              name={"username"}
              placeholder={"username"}
              errorFor={"username"}
            />
            <AuthField
              label={"password:"}
              name={"password"}
              placeholder={"********"}
              errorFor={"password"}
            />
            <AuthButton title={"login"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
