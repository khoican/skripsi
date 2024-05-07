import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
	const { style, text, icon, onClick } = props;

	return (
		<button
			className={`${style} p-3 text-md font-semibold shadow-sm rounded-md flex gap-10 justify-between items-center`}
			onClick={onClick}
		>
			{text}
			{icon ? <FontAwesomeIcon icon={icon} /> : null}
		</button>
	);
};

export default Button;
