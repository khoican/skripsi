const Button = (props) => {
    const { children, variants, type, onClick } = props;
    return (
        <>
            <button className={variants} type={type} onClick={onClick}>
                {children}
            </button>
        </>
    );
};

export default Button;
