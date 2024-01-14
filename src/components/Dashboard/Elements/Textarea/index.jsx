const Textarea = (props) => {
    const { name, cols, rows, variants } = props;
    return (
        <>
            <textarea
                className={variants}
                name={name}
                cols={cols}
                rows={rows}></textarea>
        </>
    );
};

export default Textarea;
