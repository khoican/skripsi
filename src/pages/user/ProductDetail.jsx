import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../redux/actions/productDetailAction';
import { NumericFormat } from 'react-number-format';
import Carousel from '../../components/user/fragments/carousel/Index';
import Counter from '../../components/user/fragments/counter/Index';
import postCardByUser from '../../../helper/postCardByUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faXmark } from '@fortawesome/free-solid-svg-icons';
import { updateCart } from '../../../helper/updateCart';
import Button from '../../components/user/elements/button/Index';
import Alert from '../../components/user/elements/alert/Index';
import { Helmet } from 'react-helmet';
import { decryptData } from '../../../helper/cryptoData';
import LoadingScreen from '../../components/user/fragments/LoadingScreen/Index';

const ProductDetail = (product, error) => {
	const user = localStorage.getItem('user') && decryptData('user');
	const navigate = useNavigate();
	const productId = useParams();
	const dispatch = useDispatch();
	const [existingProduct, setExistingProduct] = useState(null);
	const [status, setStatus] = useState();
	const [loading, setLoading] = useState(false);
	const [note, setNote] = useState('');
	const [showLoadingScreen, setShowLoadingScreen] = useState(true);
	const [modal, setModal] = useState(false);

	const products = useSelector((state) => state.fetchProductDetail.product);

	const count = useSelector(
		(state) => state.counter[productId.id]?.count || 0,
	);

	useEffect(() => {
		dispatch(fetchProductDetail(productId.id));
	}, [dispatch]);

	if (!products) {
		return <LoadingScreen hide={!showLoadingScreen} />;
	}

	useEffect(() => {
		const cartProduct = localStorage.getItem('cart')
			? decryptData('cart')
			: [];
		const existing =
			cartProduct &&
			cartProduct
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

	const handleNote = (e) => {
		setNote(e.target.value);
	};

	const handlePost = async () => {
		if (user) {
			setLoading(true);

			if (count > 0) {
				const response = existingProduct
					? await updateCart(
							existingProduct.id,
							note,
							count,
							productId.id,
						)
					: await postCardByUser(count, note, productId.id);

				if (response.status !== 'success') {
					setLoading(false);
					setTimeout(() => setShowLoadingScreen(false), 500);
					setStatus(response);
				} else {
					navigate('/cart');
				}
			} else {
				setStatus({
					status: 'error',
					message: 'Anda belum menambahkan jumlah pesanan',
				});

				setLoading(false);
				setTimeout(() => setShowLoadingScreen(false), 500);
			}
		} else {
			setStatus({
				status: 'error',
				message:
					'Silahkan login terlebih dahulu sebelum menambahkan produk ke keranjang',
			});
		}
	};

	let getImages = products.images ? products.images : [];

	const isMobile = window.innerWidth <= 768;

	const openModal = () => {
		setModal(!modal);
	};

	return (
		<>
			{status && (
				<Alert
					message={status.message}
					onSuccess={status.status}
					success="success"
					onClick={() => setStatus('')}
				/>
			)}

			<Helmet>
				<title>{products.name}</title>
			</Helmet>

			<main className="min-h-screen pt-5 max-w-screen-xl mx-auto px-5 md:px-20 flex flex-col md:flex-row gap-5 md:mt-5">
				<div className="w-full md:w-5/12">
					<div className="w-full">
						{getImages && <Carousel images={getImages} />}
					</div>
				</div>
				<div className="w-full md:w-7/12">
					<div className="mb-5 text-sm text-primary flex gap-1">
						<Link to={'/'}>Beranda</Link>
						<p>/</p>
						<Link to={'/products'}>Produk</Link>
						<p>/</p>
						<Link to={'/products/' + products.id + ''}>
							{products.name}
						</Link>
					</div>
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
										<span className="font-light">
											Tersedia
										</span>
									</p>
								</div>
							</div>
						</div>

						{!isMobile && (
							<div className="mt-0">
								<div className="flex gap-3">
									<div>
										<p className="text-xs mt-3">
											Jumlah Barang
										</p>
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
											className="border border-gray-500 text-sm p-2 w-full"
										/>
									</div>
								</div>
								<Button
									text={
										loading
											? 'Menambahkan....'
											: 'Masukkan keranjang'
									}
									onClick={handlePost}
									style={`bg-green-700 hover:bg-primary rounded-md p-3 text-white font-semibold text-sm mt-3 ${loading && 'cursor-not-allowed'}`}
								/>
							</div>
						)}

						<main className="mt-10">
							<p className="text-justify">
								{products.description}
							</p>
						</main>
					</div>
				</div>
			</main>

			{modal && (
				<div className="sticky z-99 bottom-0 bg-white p-5 rounded-t-md drop-shadow-top">
					<div className="flex justify-between items-center mb-5">
						<p className="text-sm font-semibold">
							Masukkan Ke Keranjang
						</p>

						<button>
							<FontAwesomeIcon
								icon={faXmark}
								onClick={openModal}
							/>
						</button>
					</div>
					<div className="flex flex-col gap-3">
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
								className="border border-gray-500 text-sm p-2 w-full"
							/>
						</div>
					</div>
					<div className="">
						<Button
							text={
								loading
									? 'Menambahkan....'
									: 'Masukkan keranjang'
							}
							onClick={handlePost}
							style={`bg-green-700 hover:bg-primary rounded-md p-3 text-white font-semibold text-sm mt-3 ${loading && 'cursor-not-allowed'}`}
						/>
					</div>
				</div>
			)}

			{isMobile && !modal && (
				<div className="sticky bottom-0 w-full bg-white p-5 drop-shadow-lg flex justify-end">
					<Button
						text={
							loading
								? 'Menambahkan....'
								: 'Masukkan ke Keranjang'
						}
						onClick={!loading ? openModal : null}
						style={`bg-green-700 hover:bg-primary rounded-md p-3 text-white font-semibold text-sm ${
							loading ? 'cursor-not-allowed bg-gray-500' : ''
						}`}
					/>
				</div>
			)}
		</>
	);
};

const mapStateToProps = (state) => ({
	product: state.fetchProductDetail.product,
	error: state.fetchProductDetail.error,
});

export default connect(mapStateToProps)(ProductDetail);
