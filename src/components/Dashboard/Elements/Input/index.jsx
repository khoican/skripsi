const Input = (props) => {
	const {
		name,
		type,
		placeholder,
		variants,
		value,
		onChange,
		onKeyPress,
		multiple,
	} = props;
	return (
		<>
			<input
				className={variants}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				onKeyPress={onKeyPress}
				multiple={multiple}
			/>
		</>
	);
};

export default Input;
