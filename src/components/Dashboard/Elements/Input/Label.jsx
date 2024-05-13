const Label = (props) => {
    const { htmlFor, children, variants } = props;
    return (
        <>
            <label className={variants} htmlFor={htmlFor}>
                {children}
            </label>
        </>
    );
};

export default Label;
