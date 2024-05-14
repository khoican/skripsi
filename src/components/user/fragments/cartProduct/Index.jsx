import Counter from '../counter/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { NumericFormat } from 'react-number-format';
import { Link } from 'react-router-dom';

const CartProduct = (props) => {
	const { id, name, price, quantity, note, productId, onClick } = props;

	let totalPrice = price * quantity;

	return (
		<div className="flex justify-between rounded-md shadow-lg w-full overflow-hidden">
			<div className="flex gap-5">
				<img
					src="https://picsum.photos/200"
					alt=""
					className="h-32 w-auto"
				/>
				<Link to={`/products/show/${productId}`} className="w-full">
					<div className="my-3 flex flex-col justify-between w-full">
						<div>
							<h1 className="text-xl font-semibold">{name}</h1>
							<p className="text-lg text-danger">
								<NumericFormat
									value={totalPrice}
									displayType={'text'}
									thousandSeparator={true}
									prefix={'Rp. '}
								/>
							</p>
						</div>
						<p className="text-sm text-gray-500">
							Catatan : {note ? note : 'Tidak ada catatan'}
						</p>
					</div>
				</Link>
			</div>
			<div className="flex flex-col justify-between items-end my-3 me-8">
				<div className="flex flex-col gap-1 items-center">
					<h3 className="text-sm">Jumlah</h3>
					<p className="text-md font-semibold">{quantity}</p>
					{/* <Counter limit={10} main={false} value={quantity} id={id} /> */}
				</div>
				<FontAwesomeIcon
					icon={faTrash}
					className="text-danger h-8"
					onClick={onClick}
				/>
			</div>
		</div>
	);
};

export default CartProduct;
