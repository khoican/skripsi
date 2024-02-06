const Input = (props) => {
    const { name, type, placeholder, variants, value, onChange } = props;
    return (
        <>
            <input
                className={variants}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default Input;
