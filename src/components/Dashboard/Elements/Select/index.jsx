const Select = (props) => {
    const { children, name, value, variants } = props;
    return (
        <>
            <select className={variants} name={name} value={value}>
                {children}
            </select>
        </>
    );
};

export default Select;
