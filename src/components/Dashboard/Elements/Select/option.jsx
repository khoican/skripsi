const Option = (props) => {
    const { value, title } = props;
    return (
        <>
            <option value={value}>{title}</option>
        </>
    );
};

export default Option;
