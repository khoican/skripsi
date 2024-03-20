import { useEffect, useState } from 'react';
import { getAllProducts } from '../../../services/product';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import ProductCard from '../../components/user/fragments/productCard/Index';
import { Link, useParams } from 'react-router-dom';
import noData from '/no-data.png';

const ProductPage = () => {
	const [getProduct, setGetProduct] = useState([]);
	const subCategoryId = useParams();

	useEffect(() => {
		getAllProducts((data) => {
			setGetProduct(
				subCategoryId.id
					? data.data
							.filter(
								(product) =>
									product.subCategoryId === subCategoryId.id,
							)
							.map((product) => ({
								id: product.id,
								name: product.name,
								slug: product.slug,
								price: product.price,
								tumb: product.images.map(
									(image) => image.image,
								),
								subCategory: product.subCategoryId,
							}))
					: data.data.map((product) => ({
							id: product.id,
							name: product.name,
							slug: product.slug,
							price: product.price,
							tumb: product.images.map((image) => image.image),
							subCategory: product.subCategoryId,
						})),
			);
		});
	});

	return (
		<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
			<CategoriesMenu />

			<div className="w-3/4">
				<div className="">
					<h1 className="font-semibold text-lg mb-3">
						{subCategoryId.id
							? 'Produk Sub Kategori'
							: 'Semua Produk'}
					</h1>

					<div className="flex flex-wrap gap-[2%] w-full">
						{getProduct.length > 0 ? (
							getProduct.map((item, index) => (
								<ProductCard
									key={index}
									link={item.slug}
									image={item.tumb[1]}
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
