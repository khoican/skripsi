const Option = (props) => {
	const { value, title, onClick, onChange, isEdit = false } = props;

	if (isEdit) {
		return (
			<>
				<option
					value={value}
					onClick={onClick}
					onChange={onChange}
					selected
				>
					{title}
				</option>
			</>
		);
	}

	return (
		<>
			<option value={value} onClick={onClick} onChange={onChange}>
				{title}
			</option>
		</>
	);
};

export default Option;
