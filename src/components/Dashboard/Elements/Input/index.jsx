const Input = (props) => {
    const { name, type, placeholder, variants, value } = props;
    return (
        <>
            <input
                className={variants}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </>
    );
};

export default Input;
