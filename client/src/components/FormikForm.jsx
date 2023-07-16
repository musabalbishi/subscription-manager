import { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { InputNumber } from "primereact/inputnumber";

// import { Dialog } from "primereact/dialog";
import { classNames } from "primereact/utils";

function FormikForm() {
  //   const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      value: "",
      cycle: "",
      startDate: null,
      alert: null,
      reciveAlert: "email",
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      //   setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  //   const dialogFooter = (
  //     <div className="text-center">
  //       <Button
  //         label="OK"
  //         className="p-button-text"
  //         autoFocus
  //         // onClick={() => setShowMessage(false)}
  //       />
  //     </div>
  //   );

  return (
    <div>
      <div className="surface-card border-round shadow-2 p-4">
        <span className="text-900 text-2xl font-medium mb-4 block">
          Register with Formik
        </span>

        <form onSubmit={formik.handleSubmit} className="p-fluid">
          {/* name */}
          <div className="mb-5">
            <span className="p-float-label">
              <InputText
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                className={classNames({
                  "p-invalid": isFormFieldValid("name"),
                })}
              />
              <label
                htmlFor="name"
                className={classNames({ "p-error": isFormFieldValid("name") })}
              >
                Name*
              </label>
            </span>
            {getFormErrorMessage("name")}
          </div>
          {/* value and cycle */}
          <div className="flex items-center gap-3">
            {/* value */}
            <div className="mb-5 flex-grow">
              <span className="p-float-label p-input-icon-right">
                <div className="p-inputgroup">
                  <span className="p-inputgroup-addon">$</span>
                  <InputNumber placeholder="Price" />
                  <span className="p-inputgroup-addon">.00</span>
                </div>
                {/* <InputNumber
                  id="value"
                  name="value"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                /> */}
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Value*{" "}
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            {/* cycle */}
            <div className="mb-5 flex-grow">
              <span className="p-float-label">
                <Dropdown
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  optionLabel="name"
                />
                <label htmlFor="country">cycle</label>
              </span>
            </div>
          </div>
          {/* date */}
          <div className="mb-5">
            <span className="p-float-label">
              <Calendar
                id="date"
                name="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                dateFormat="dd-mm-yy"
                showIcon
              />
              <label htmlFor="date">Start Date</label>
            </span>
          </div>
          {/* alert */}
          <div className="mb-5">
            <span className="p-float-label">
              <Dropdown
                id="alert"
                name="alert"
                value={formik.values.country}
                onChange={formik.handleChange}
                optionLabel="name"
              />
              <label htmlFor="alert">alert</label>
            </span>
          </div>
          {/* recive alert */}
          <div className="mb-5">
            <span className="p-float-label">
              <Dropdown
                id="reciveAlert"
                name="reciveAlert"
                value={formik.values.country}
                onChange={formik.handleChange}
                optionLabel="name"
              />
              <label htmlFor="alert">
                How would you like to recive your alert ?
              </label>
            </span>
          </div>

          <Button type="submit" label="Add Subscription" />
        </form>
      </div>
    </div>
  );
}

export default FormikForm;
