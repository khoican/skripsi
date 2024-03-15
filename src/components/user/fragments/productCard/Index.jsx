import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const ProductCard = (props) => {
	const { link, image, title, price } = props;

	return (
		<div className="w-[49%] lg:w-[23.5%] shadow bg-white mb-3">
			<Link to={link}>
				<img
					src={image}
					alt={`gambar ${title}`}
					className="w-full h-52 object-cover"
				/>

				<div className="flex justify-between p-3 items-center">
					<div>
						<h1 className="font-semibold text-sm capitalize">
							{title}
						</h1>

						<p className="text-red-500">
							<NumericFormat
								value={price}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'Rp. '}
							/>
						</p>
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
