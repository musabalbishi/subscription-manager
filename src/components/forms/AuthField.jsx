import { Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
const AuthField = (props) => {
  return (
    <div className="flex flex-col items-start">
      <label>{props.label}</label>
      <Field
        name={props.name}
        placeholder={props.placeholder}
        className="w-full p-2 rounded-md bg-slate-100"
      />
      <ErrorMessage name={props.errorFor} component="span" />
    </div>
  );
};

AuthField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  errorFor: PropTypes.string,
};

export default AuthField;
