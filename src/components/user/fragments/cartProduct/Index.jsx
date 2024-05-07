import Counter from '../counter/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartProduct = () => {
	return (
		<div className="flex justify-between rounded-md shadow-lg w-full overflow-hidden">
			<div className="flex gap-5">
				<img
					src="https://picsum.photos/200"
					alt=""
					className="h-32 w-auto"
				/>
				<div className="my-3 flex flex-col justify-between w-full">
					<div>
						<h1 className="text-xl font-semibold">Product 1</h1>
						<p className="text-lg text-danger">Rp. 100.000</p>
					</div>
					<p className="text-sm text-gray-500">catatan</p>
				</div>
			</div>
			<div className="flex flex-col justify-between items-end my-3 me-8">
				<div className="flex flex-col gap-1">
					<h3 className="text-sm">Jumlah</h3>
					<Counter limit={10} main={false} />
				</div>
				<FontAwesomeIcon icon={faTrash} className="text-danger h-6" />
			</div>
		</div>
	);
};

export default CartProduct;
