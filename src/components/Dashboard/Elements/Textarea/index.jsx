const Textarea = (props) => {
	const { name, cols, rows, variants, onChange, placeholder, value } = props;
	return (
		<>
			<textarea
				placeholder={placeholder}
				className={variants}
				name={name}
				cols={cols}
				rows={rows}
				onChange={onChange}
				value={value}
			></textarea>
		</>
	);
};

export default Textarea;
