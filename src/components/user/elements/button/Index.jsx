import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
	const { style, text, icon, onClick, active, bold } = props;

	return (
		<button
			className={`${style} p-3 text-xs md:text-base ${bold ? bold : 'font-semibold'} shadow-sm rounded-md ${icon ? 'flex' : ''} gap-10 justify-between items-center ${
				active ? 'bg-primary text-white' : ''
			}`}
			onClick={onClick}
		>
			{text}
			{icon ? <FontAwesomeIcon icon={icon} /> : null}
		</button>
	);
};

export default Button;
