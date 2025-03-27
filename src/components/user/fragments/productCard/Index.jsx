import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';
import { getAppUrl } from '../../../../../config/app';
import logo from '/logo.png';
import postCardByUser from '../../../../../helper/postCardByUser';
import { decryptData } from '../../../../../helper/cryptoData';
import { useEffect, useState } from 'react';

const ProductCard = ({ link, image, title, price, onStatus }) => {
	const user = localStorage.getItem('user') ? decryptData('user') : null;
	const [optimizedImage, setOptimizedImage] = useState(null);

	const handlePostCart = async () => {
		if (user) {
			const response = await postCardByUser(1, '', link);
			onStatus(response);
		} else {
			onStatus({
				status: 'error',
				message:
					'Silahkan login terlebih dahulu sebelum menambahkan produk ke keranjang',
			});
		}
	};

	useEffect(() => {
		setOptimizedImage(null); // Reset image when component mounts or page changes
		const resizeImage = (fileUrl, width, callback) => {
			const img = new Image();
			img.crossOrigin = 'Anonymous';
			img.onload = () => {
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');

				const scale = width / img.width;
				canvas.width = width;
				canvas.height = img.height * scale;

				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				callback(canvas.toDataURL('image/webp', 0.5));
			};
			img.onerror = () => {
				console.error('Gagal memuat gambar:', fileUrl);
				callback(null);
			};
			img.src = fileUrl;
		};

		if (image) {
			resizeImage(`${getAppUrl()}${image}`, 800, setOptimizedImage);
		}
	}, [image, link]);

	return (
		<div className="w-[49%] lg:w-[32%] shadow bg-white mb-3">
			<Link to={`/products/show/${link}`}>
				{optimizedImage ? (
					<img
						src={optimizedImage || logo}
						alt={`gambar ${title}`}
						className="w-full h-52 object-cover"
						loading="lazy"
					/>
				) : (
					<div className="w-full h-52 bg-gray-50 overflow-hidden relative animate-pulse">
						<div className="w-full h-full bg-gray-300"></div>
					</div>
				)}
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

				<button
					onClick={handlePostCart}
					className="text-gray-600 hover:text-primary"
				>
					<FontAwesomeIcon icon={faCartShopping} />
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
