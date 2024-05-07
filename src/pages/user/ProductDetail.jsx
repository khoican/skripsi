import { useEffect, useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../actions/productDetailAction';
import { NumericFormat } from 'react-number-format';
import Carousel from '../../components/user/fragments/carousel/Index';
import Counter from '../../components/user/fragments/counter/Index';
import postCardByUser from '../../../helper/postCardByUser';

const ProductDetail = (loading, product, error) => {
	const productId = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.fetchProductDetail.product);
	const count = useSelector((state) => state.counter.count);

	const [note, setNote] = useState('');

	useEffect(() => {
		dispatch(fetchProductDetail(productId.id));
	}, [dispatch]);

	if (!loading) {
		return <p>Loading...</p>;
	}

	const handleNote = (e) => {
		setNote(e.target.value);
	};

	const handlePost = () => {
		postCardByUser(
			count,
			note,
			'08dbab14-09f0-4585-bdc4-2edac3553e74',
			productId.id,
		);

		window.location.replace('/cart');
	};

	const getImages = products.images;

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<div className="w-5/12">
				<div className="w-full">
					<Carousel images={getImages} />
				</div>
			</div>
			<div className="w-7/12">
				<div className="p-3">
					<div className="flex justify-between">
						<div className="flex flex-col">
							<div>
								<h1 className="font-semibold text-xl capitalize">
									{products.name}
								</h1>
								<p className="font-semibold text-2xl text-red-600">
									<NumericFormat
										value={products.price}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'Rp. '}
									/>
								</p>
							</div>
							<div className="flex gap-3 mt-3">
								<p className="text-sm font-semibold">
									{products.stock}{' '}
									<span className="font-light">Tersedia</span>
								</p>
							</div>
						</div>
					</div>
					<hr />

					<div>
						<div className="flex gap-3">
							<div>
								<p className="text-xs mt-3">Jumlah Barang</p>
								<Counter limit={products.stock} />
							</div>
							<div>
								<p className="text-xs mt-3">Catatan</p>
								<input type="text" onChange={handleNote} />
							</div>
						</div>
						<button
							onClick={handlePost}
							className="bg-primary rounded-md p-3 text-white font-semibold text-sm mt-3"
						>
							Tambah Keranjang
						</button>
					</div>

					<main className="mt-5">
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
