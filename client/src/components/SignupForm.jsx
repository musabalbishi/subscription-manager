import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
const SignupForm = () => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    password: "",
  };
  const validationSchema = yup.object({
    username: yup.string().required("usernae is required"),
    email: yup.string().email().required("email is required"),
    phone: yup.string().min(9).max(9).required("phone number is required"),
    password: yup
      .string()
      .min(4, "password must atleast 4 charachters long ")
      .required("required"),
  });
  const onSubmit = (values) => {
    console.log("signup", values);
  };
  return (
    <div className="bg-white shadow-lg w-1/4 rounded-lg p-3 text-center">
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
              <label>email:</label>
              <Field
                name="email"
                placeholder="jonDoe@gmail.com"
                className="w-full p-2 rounded-md bg-slate-100"
              />
              <ErrorMessage name="email" component="span" />
            </div>
            <div className="flex flex-col items-start">
              <label>phone:</label>
              <Field
                name="phone"
                placeholder="05xxxxxxxx"
                className="w-full p-2 rounded-md bg-slate-100"
              />
              <ErrorMessage name="phone" component="span" />
            </div>
            <div className="flex flex-col items-start">
              <label>password:</label>
              <Field
                name="password"
                type="password"
                placeholder="*******"
                className="w-full p-2 rounded-md bg-slate-100"
              />
              <ErrorMessage name="password" component="span" />
            </div>

            <button type="submit" className="bg-slate-200 p-2 rounded-lg mt-4">
              sign up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
