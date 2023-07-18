import PropTypes from "prop-types";
const AuthButton = (props) => {
  return (
    <button type="submit" className="bg-slate-200 p-2 rounded-lg mt-4">
      {props.title}
    </button>
  );
};

AuthButton.propTypes = {
  title: PropTypes.string,
};
export default AuthButton;
