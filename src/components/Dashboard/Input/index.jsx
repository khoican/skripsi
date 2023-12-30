import PropTypes from "prop-types";

const Input = (props) => {
    const { name, type, placeholder, variants } = props;
    return (
        <>
            <input
                className={variants}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
