const Button = (props) => {
	const { children, variants, type, onClick, id } = props;
	return (
		<>
			<button
				className={variants}
				type={type}
				onClick={onClick}
				data-id={id}
			>
				{children}
			</button>
		</>
	);
};

export default Button;
