import Counter from '../counter/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';
import { getAppUrl } from '../../../../../config/app';
import logo from '/logo.png';

const CartProduct = (props) => {
	const {
		id,
		name,
		price,
		quantity,
		note,
		productId,
		onClick,
		image,
		onDelete,
	} = props;

	let totalPrice = price * quantity;

	return (
		<div className="flex justify-between rounded-md shadow-lg w-full overflow-hidden">
			<div className="flex gap-5">
				<img
					src={image !== null ? getAppUrl() + image : logo}
					alt=""
					className="h-24 md:h-32 w-auto my-auto"
				/>
				<Link to={`/products/show/${productId}`} className="w-full">
					<div className="my-3 flex flex-col justify-between w-full">
						<div>
							<h1 className="text-lg md:text-xl font-semibold">
								{name}
							</h1>
							<p className="text-sm md:text-lg text-danger">
								<NumericFormat
									value={totalPrice}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'Rp. '}
								/>
							</p>
						</div>
						<p className="text-xs md:text-sm text-gray-500">
							Catatan : {note ? note : 'Tidak ada catatan'}
						</p>
					</div>
				</Link>
			</div>
			<div className="flex flex-col justify-between items-end my-3 me-8">
				<div className="flex flex-col gap-1 items-center">
					<h3 className="text-xs md:text-sm">Jumlah</h3>
					<p className="text-sm md:text-md font-semibold">
						{quantity}
					</p>
					{/* <Counter limit={10} main={false} value={quantity} id={id} /> */}
				</div>
				<FontAwesomeIcon
					icon={faTrash}
					className="cursor-pointer text-danger h-5 md:h-8"
					onClick={onClick}
				/>
			</div>
		</div>
	);
};

export default CartProduct;
