const Textarea = (props) => {
	const { name, cols, rows, variants, onChange, placeholder } = props;
	return (
		<>
			<textarea
				placeholder={placeholder}
				className={variants}
				name={name}
				cols={cols}
				rows={rows}
				onChange={onChange}
			></textarea>
		</>
	);
};

export default Textarea;
