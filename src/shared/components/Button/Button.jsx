import PropTypes from "prop-types";

const Button = ({ onClickBtn, btnText, type, className }) => {
  return (
    <button className={className} type={type} onClick={onClickBtn}>
      {btnText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  onClickBtn: PropTypes.func,
  btnText: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]).isRequired,
};
