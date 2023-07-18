import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
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
            <div className="flex flex-col items-start">
              <label>username:</label>
              <Field
                name="username"
                placeholder="username"
                className="w-full p-2 rounded-md bg-slate-100"
              />
              <ErrorMessage name="username" component="span" />
            </div>
            <div className="flex flex-col items-start">
              <label>password:</label>
              <Field
                type="password"
                name="password"
                placeholder="password"
                className="w-full p-2 rounded-md bg-slate-100"
              />
              <ErrorMessage name="password" component="span" />
            </div>
            <button type="submit" className="bg-slate-200 p-2 rounded-lg mt-4">
              login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
