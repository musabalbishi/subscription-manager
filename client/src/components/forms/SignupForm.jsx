import { Formik, Form } from "formik";
import * as yup from "yup";
import AuthField from "./AuthField";
import AuthButton from "./AuthButton";
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
            <AuthField
              label={"username:"}
              name={"username"}
              placeholder={"username"}
              errorFor={"username"}
            />
            <AuthField
              label={"email:"}
              name={"email"}
              placeholder={"jondoe@gmail.com"}
              errorFor={"email"}
            />
            <AuthField
              label={"phone:"}
              name={"phone"}
              placeholder={"055XXXXXX"}
              errorFor={"phone"}
            />
            <AuthField
              label={"password:"}
              name={"password"}
              placeholder={"*******"}
              errorFor={"password"}
            />

            <AuthButton title={"sign up"} />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
