import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProductCard = () => {
	return (
		<div className="w-[49%] shadow bg-white mb-3">
			<Link to={'/'}>
				<img
					src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
					alt=""
				/>

				<div className="flex justify-between p-3 items-center">
					<div>
						<h1 className="font-semibold text-sm">
							Lorem ipsum dolor sit amet.
						</h1>

						<p className="text-red-500">Rp. 500.0000</p>
					</div>

					<div>
						<FontAwesomeIcon icon={faCartShopping} />
					</div>
				</div>
			</Link>
		</div>
	);
};

export default ProductCard;
