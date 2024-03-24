import { useEffect } from 'react';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import ProductCard from '../../components/user/fragments/productCard/Index';
import { Link, useParams } from 'react-router-dom';
import noData from '/no-data.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/productsAction';

const ProductPage = () => {
	const subCategoryId = useParams();
	const dispatch = useDispatch();
	let products = useSelector((state) => state.fetchProducts.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	let product = subCategoryId.id
		? products.filter(
				(product) => product.subCategoryId === subCategoryId.id,
			)
		: products;

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<CategoriesMenu />

			<div className="w-3/4">
				<div className="">
					<h1 className="font-semibold text-lg mb-3">
						{subCategoryId.id
							? 'Menampilkan ' + product.length + ' Produk'
							: 'Semua Produk'}
					</h1>

					<div className="flex flex-wrap gap-[2%] w-full">
						{product.length > 0 ? (
							product.map((item, index) => (
								<ProductCard
									key={index}
									link={item.slug}
									image={
										item.images.length > 0
											? item.images[0].image
											: ''
									}
									title={item.name}
									price={item.price}
								/>
							))
						) : (
							<div className="w-full flex flex-col items-center mt-5">
								<img
									src={noData}
									alt="No Data"
									className="w-1/2"
								/>
								<p className="w-full font-semibold text-red-400 mb-2 text-center">
									Tidak ada produk di sub kategori ini
								</p>
								<Link
									to={'/products'}
									className="w-full text-center font-semibold text-primary underline"
								>
									Kembali ke halaman produk
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	);
};

export default ProductPage;
