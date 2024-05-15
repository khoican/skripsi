import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { getAppUrl } from '../../../../../config/app';
import logo from '/logo.png';
import postCardByUser from '../../../../../helper/postCardByUser';

const ProductCard = (props) => {
	const { link, image, title, price, onStatus } = props;

	const handlePostCart = async () => {
		const response = await postCardByUser(1, '', link);
		onStatus(response);
	};

	return (
		<div className="w-[49%] lg:w-[32%] shadow bg-white mb-3">
			<Link to={`/products/show/${link}`}>
				<img
					src={image ? `${getAppUrl()}${image}` : logo}
					alt={`gambar ${title}`}
					className="w-full h-52 object-cover"
					loading="lazy"
				/>
			</Link>

			<div className="flex justify-between p-3 items-center">
				<Link to={`/products/show/${link}`}>
					<div>
						<h1 className="font-semibold text-sm capitalize">
							{title}
						</h1>

						<p className="text-danger">
							<NumericFormat
								value={price}
								displayType={'text'}
								thousandSeparator={true}
								prefix={'Rp. '}
							/>
						</p>
					</div>
				</Link>

				<div>
					<FontAwesomeIcon
						icon={faCartShopping}
						className="hover:text-primary"
						onClick={handlePostCart}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
