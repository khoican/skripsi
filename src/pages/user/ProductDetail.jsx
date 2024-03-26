import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../../actions/productDetailAction';
import { NumericFormat } from 'react-number-format';
import Carousel from '../../components/user/fragments/carousel/Index';

const ProductDetail = () => {
	const productId = useParams();
	const dispatch = useDispatch();
	const products = useSelector((state) => state.fetchProductDetail.product);

	useEffect(() => {
		dispatch(fetchProductDetail(productId.id));
	}, [dispatch]);

	if (!products) {
		return <p>Loading...</p>;
	}

	const getImages = products.images;
	// console.log(getImages.map((image) => image.image));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<div className="w-1/3">
				<div className="w-full">
					<Carousel images={getImages} />
				</div>
			</div>
			<div className="w-2/3">
				<div className="p-3">
					<div className="flex justify-between items-center">
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
						<div className="text-center px-5">
							<p className="text-sm">Stok Tersedia</p>
							<p className="text-3xl font-semibold">
								{products.stock}
							</p>
						</div>
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
