const Option = (props) => {
	const { value, title, onClick, onChange } = props;

	return (
		<>
			<option value={value} onClick={onClick} onChange={onChange}>
				{title}
			</option>
		</>
	);
};

export default Option;
