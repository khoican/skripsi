const Textarea = (props) => {
	const { name, cols, rows, variants, onChange } = props;
	return (
		<>
			<textarea
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
