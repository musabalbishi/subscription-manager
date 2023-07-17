import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Calendar } from "primereact/calendar";
import * as Yup from "yup";
const SubForm = () => {
  const initialValues = {
    email: "",
    username: "",
    password: "",
    value: "",
    cycle: "",
    alertNotice: "",
    reciveAlert: "",
  };
  const onsubmit = (values) => {
    console.log("onSubmit", values);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email adress"),
    password: Yup.string().required("Password is required"),
    username: Yup.string().required("Username is required"),
    value: Yup.string().required("value is required"),
    cycle: Yup.string().required("cycle is required"),
    alertNotice: Yup.string().required("alert notice is required"),
    reciveAlert: Yup.string().required("required"),
  });

  return (
    <>
      <h1>Hello monsterlessons</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="field">
              <Field name="email" placeholder="Email" />

              <div className="error">
                <ErrorMessage name="email" component="span" />
              </div>
            </div>
            <div className="field">
              <Field name="username" placeholder="Username" />
              <div className="error">
                <ErrorMessage name="username" component="span" />
              </div>
            </div>
            <div className="field">
              <Field name="password" placeholder="Password" type="password" />
              <div className="error">
                <ErrorMessage name="password" component="span" />
              </div>
            </div>

            {/* value */}
            <div className="field">
              <Field name="value" placeholder="value" />
              <div className="error">
                <ErrorMessage name="value" component="span" />
              </div>
            </div>

            {/* cycle */}
            <div className="field">
              <Field as="select" name="cycle">
                <option value="weekly">weekly</option>
                <option value="monthly">monthly</option>
                <option value="yearly">yearly</option>
              </Field>
              <div className="error">
                <ErrorMessage name="cycle" component="span" />
              </div>
            </div>

            {/* alert */}
            <div className="field">
              <Field as="select" name="alertNotice">
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="7">7</option>
              </Field>
              <div className="error">
                <ErrorMessage name="alertNotice" component="span" />
              </div>
            </div>

            {/* recive alert */}
            <div className="field">
              <Field as="select" name="reciveAlert">
                <option value="email">email</option>
                <option value="sms">sms</option>
              </Field>
              <div className="error">
                <ErrorMessage name="reciveAlert" component="span" />
              </div>
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SubForm;
