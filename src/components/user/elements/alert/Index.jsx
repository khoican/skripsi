import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faClose } from '@fortawesome/free-solid-svg-icons';

const Alert = (props) => {
	const { success, message, onClick, onSuccess } = props;
	return (
		<div
			className={`fixed flex items-center gap-5 md:gap-10 top-10 right-4 w-3/4 md:w-full md:right-10 rounded-md p-5 text-white z-10 shadow-lg ${onSuccess === success ? 'bg-success' : 'bg-danger'}`}
		>
			<div className="flex items-center gap-2">
				<FontAwesomeIcon
					icon={faCircleInfo}
					className="text-md md:text-xl"
				/>
				<p className="text-xs md:text-base">{message}</p>
			</div>
			<FontAwesomeIcon
				icon={faClose}
				className="text-xl cursor-pointer"
				onClick={onClick}
			/>
		</div>
	);
};

export default Alert;
