import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment/moment';
import { Link } from 'react-router-dom';

const CardOrderHitory = (props) => {
	const { invoice, date, address, status, id } = props;

	const getDate = moment(date);
	const formattedDate = getDate.locale('id').format('DD MMMM YYYY');

	return (
		<div className="w-full p-5 rounded-md shadow-md">
			<div className="flex justify-between items-center w-full border-b border-gray-200 pb-4">
				<h1 className="font-semibold">#{invoice}</h1>

				{status === 'PROSES' ? (
					<StatusProcess />
				) : status === 'SUKSES' ? (
					<SuccessProcess />
				) : (
					<CanceledProcess />
				)}
			</div>
			<div className="flex justify-between items-center w-full mt-3 text-gray-500">
				<div className="flex gap-5 items-center">
					<div className="flex gap-2 items-center">
						<div className="w-6 h-6 flex justify-center items-center">
							<FontAwesomeIcon icon={faCalendar} />
						</div>
						<p className="text-sm">{formattedDate}</p>
					</div>
					<div className="flex gap-2 items-center">
						<div className="w-6 h-6 flex justify-center items-center">
							<FontAwesomeIcon icon={faMapLocationDot} />
						</div>
						<p className="text-sm">{address}</p>
					</div>
				</div>

				<Link
					to={`/invoice/${id}`}
					className="text-sm text-primary hover:underline"
				>
					Lihat Invoice
				</Link>
			</div>
		</div>
	);
};

const StatusProcess = () => {
	return (
		<div className="bg-yellow-500 p-2 rounded-md">
			<p className="text-white text-sm">Sedang Diproses</p>
		</div>
	);
};

const SuccessProcess = () => {
	return (
		<div className="bg-success p-2 rounded-md">
			<p className="text-white text-sm">Sedang Diproses</p>
		</div>
	);
};

const CanceledProcess = () => {
	return (
		<div className="bg-danger p-2 rounded-md">
			<p className="text-white text-sm">Sedang Diproses</p>
		</div>
	);
};

export default CardOrderHitory;
