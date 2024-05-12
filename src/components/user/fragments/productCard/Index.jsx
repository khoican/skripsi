import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { getAppUrl } from '../../../../../config/app';
import { useState } from 'react';
import logo from '/logo.png';

const ProductCard = (props) => {
	const { id, link, image, title, price } = props;
	const [productId, setProductId] = useState();

	return (
		<div className="w-[49%] lg:w-[32%] shadow bg-white mb-3">
			<Link to={`/products/show/${link}`}>
				<img
					src={image ? `${getAppUrl()}${image}` : logo}
					alt={`gambar ${title}`}
					className="w-full h-52 object-cover"
					loading="lazy"
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
