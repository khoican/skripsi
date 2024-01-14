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

export default Input;
