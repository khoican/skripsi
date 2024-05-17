const Select = (props) => {
	const { children, name, value, variants, onChange } = props;
	return (
		<>
			<select
				className={variants}
				name={name}
				value={value}
				onChange={onChange}
			>
				{children}
			</select>
		</>
	);
};

export default Select;
