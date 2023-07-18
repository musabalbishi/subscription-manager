import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SubForm = () => {
  const initialValues = {
    name: "",
    value: "",
    cycle: "",
    alertNotice: "",
    reciveAlert: "",
    startDate: "",
  };
  const onsubmit = (values) => {
    console.log("onSubmit", values);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("name is required"),
    value: Yup.string().required("value is required"),
    cycle: Yup.string().required("cycle is required"),
    alertNotice: Yup.string().required("alert notice is required"),
    reciveAlert: Yup.string().required("required"),
  });

  return (
    <div className="p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onsubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <Form>
            <div className="field flex flex-col">
              <label>name:</label>
              <Field
                className="p-2 rounded-md border-none"
                name="name"
                placeholder="name"
              />

              <div className="error">
                <ErrorMessage name="name" component="span" />
              </div>
            </div>

            {/* value */}
            <div className="flex items-center gap-3">
              <div className="field flex flex-col flex-grow">
                <label>value:</label>
                <Field
                  className="p-2 rounded-md border-none"
                  name="value"
                  placeholder="value"
                />
                <div className="error">
                  <ErrorMessage name="value" component="span" />
                </div>
              </div>

              {/* cycle */}
              <div className="field flex flex-col flex-grow">
                <label>cycle:</label>
                <Field
                  as="select"
                  name="cycle"
                  className="p-2 rounded-md border-none"
                >
                  <option value="weekly">weekly</option>
                  <option value="monthly">monthly</option>
                  <option value="yearly">yearly</option>
                </Field>
                <div className="error">
                  <ErrorMessage name="cycle" component="span" />
                </div>
              </div>
            </div>
            {/* start date */}
            <div className="field flex flex-col">
              <label>start date:</label>
              <Field
                className="p-2 rounded-md border-none"
                type="date"
                name="startDate"
                placeholder="start date"
              />
              <div className="error">
                <ErrorMessage name="startDate" component="span" />
              </div>
            </div>
            {/* alert */}
            <div className="field flex flex-col">
              <label>alert:</label>
              <Field
                as="select"
                name="alertNotice"
                className="p-2 rounded-md border-none"
              >
                <option value=""></option>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="7">7</option>
              </Field>
              <div className="error">
                <ErrorMessage name="alertNotice" component="span" />
              </div>
            </div>

            {/* recive alert */}
            <div className="field flex flex-col">
              <label>how would you like to recive your alert?</label>
              <Field
                as="select"
                name="reciveAlert"
                className="p-2 rounded-md border-none"
              >
                <option value="email">email</option>
                <option value="sms">sms</option>
              </Field>
              <div className="error">
                <ErrorMessage name="reciveAlert" component="span" />
              </div>
            </div>
            <button
              className="p-2 my-4 rounded-lg w-full bg-slate-300"
              type="submit"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SubForm;
