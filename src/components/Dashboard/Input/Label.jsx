const Label = (props) => {
    const { htmlFor, title, variants } = props;
    return (
        <>
            <label className={variants} htmlFor={htmlFor}>
                {title}
            </label>
        </>
    );
};

export default Label;
