import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../redux/actions/productDetailAction';
import { NumericFormat } from 'react-number-format';
import Carousel from '../../components/user/fragments/carousel/Index';
import Counter from '../../components/user/fragments/counter/Index';
import postCardByUser from '../../../helper/postCardByUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox } from '@fortawesome/free-solid-svg-icons';
import { updateCart } from '../../../helper/updateCart';

const ProductDetail = (loading, product, error) => {
	const navigate = useNavigate();
	const productId = useParams();
	const dispatch = useDispatch();
	const [existingProduct, setExistingProduct] = useState(null);
	const [status, setStatus] = useState('');
	const [note, setNote] = useState('');

	const products = useSelector((state) => state.fetchProductDetail.product);

	const count = useSelector((state) => state.counter[productId.id]?.count);

	useEffect(() => {
		dispatch(fetchProductDetail(productId.id));
	}, [dispatch]);

	useEffect(() => {
		const cartProduct = JSON.parse(localStorage.getItem('cart')) || [];
		const existing = cartProduct
			.filter((item) => item.productId === productId.id)
			.map((item) => {
				setNote(item.notes);
				return {
					id: item.id,
					quantity: item.quantity,
					notes: item.notes,
				};
			});
		setExistingProduct(existing[0]);
	}, [productId]);

	if (!products && !products.images) {
		return <p>Loading...</p>;
	}

	const handleNote = (e) => {
		setNote(e.target.value);
	};

	const handlePost = async () => {
		const response = existingProduct
			? await updateCart(existingProduct.id, note, count, productId.id)
			: await postCardByUser(count, note, productId.id);

		if (response.status !== 'success') {
			setStatus(response.message);
		} else {
			navigate('/cart');
		}
	};
	const getImages = products.images ? products.images : [];

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<div className="w-5/12">
				<div className="w-full">
					{getImages && <Carousel images={getImages} />}
				</div>
			</div>
			<div className="w-7/12">
				<div className="p-3">
					<div className="flex justify-between pb-1 border-b border-gray-300">
						<div className="flex flex-col">
							<div>
								<h1 className="font-semibold text-xl capitalize">
									{products.name}
								</h1>
								<p className="font-semibold text-2xl text-danger">
									<NumericFormat
										value={products.price}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'Rp. '}
									/>
								</p>
							</div>
							<div className="flex gap-2 mt-3 items-center">
								<FontAwesomeIcon
									icon={faBox}
									className="text-gray-600"
								/>
								<p className="text-sm font-semibold">
									{products.stock}{' '}
									<span className="font-light">Tersedia</span>
								</p>
							</div>
						</div>
					</div>

					<div className="mt-0">
						<div className="flex gap-3">
							<div>
								<p className="text-xs mt-3">Jumlah Barang</p>
								<Counter
									limit={products.stock}
									id={productId.id}
									value={
										existingProduct
											? existingProduct.quantity
											: 0
									}
								/>
							</div>
							<div>
								<p className="text-xs mt-3">Catatan</p>
								<input
									type="text"
									value={note}
									onChange={handleNote}
									className="border border-gray-500 text-sm p-2"
								/>
							</div>
						</div>
						<button
							onClick={handlePost}
							className="bg-primary rounded-md p-3 text-white font-semibold text-sm mt-3"
						>
							Tambah Keranjang
						</button>
					</div>

					<main className="mt-10">
						<p className="text-justify">{products.description}</p>
					</main>
				</div>
			</div>
		</main>
	);
};

const mapStateToProps = (state) => ({
	loading: state.fetchProductDetail.loading,
	product: state.fetchProductDetail.product,
	error: state.fetchProductDetail.error,
});

export default connect(mapStateToProps)(ProductDetail);
