const Button = (props) => {
    const { children, variants, type } = props;
    return (
        <>
            <button className={variants} type={type}>
                {children}
            </button>
        </>
    );
};

export default Button;
