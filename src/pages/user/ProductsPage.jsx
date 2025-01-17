import { useEffect, useState } from 'react';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import ProductCard from '../../components/user/fragments/productCard/Index';
import { Link, useLocation, useParams } from 'react-router-dom';
import noData from '/no-data.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsAction';
import Alert from '../../components/user/elements/alert/Index';
import { searchProductByName } from '../../../services/product';

const ProductPage = () => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState();
	const [search, setSearch] = useState('');
	const location = useLocation();
	let products = useSelector((state) => state.fetchProducts.products);

	const searchQuery =
		new URLSearchParams(location.search).get('search') || '';
	const categoryQuery =
		new URLSearchParams(location.search).get('category') || '';
	const subCategoryQuery =
		new URLSearchParams(location.search).get('subCategory') || '';

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	const getProductBySearch = async () => {
		const response = await searchProductByName(searchQuery);

		return response;
	};

	useEffect(() => {
		const fetchSearchProduct = async () => {
			const data = await getProductBySearch();
			setSearch(data);
		};

		fetchSearchProduct();
	}, [searchQuery]);
	console.log(products);

	const handleStatus = (message) => {
		setStatus(message);

		setTimeout(() => {
			setStatus('');
		}, 5000);
	};

	const handleClose = () => {
		setStatus('');
	};

	let product = [];

	if (searchQuery) {
		product = search;
	} else if (categoryQuery && subCategoryQuery) {
		product = products.filter(
			(product) => product.subCategoryId == subCategoryQuery,
		);
	} else if (categoryQuery) {
		product = products.filter(
			(product) => product.categoryId == categoryQuery,
		);
	} else {
		product = products;
	}

	console.log(product);

	return (
		<>
			{status && (
				<Alert
					message={status.message}
					onSuccess={status.status}
					success="success"
					onClick={handleClose}
				/>
			)}

			<main className="min-h-screen p-5 max-w-screen-xl mx-auto px-5 md:px-20 flex gap-5 mt-5">
				<CategoriesMenu />

				<div className="w-full md:w-3/4">
					<div className="">
						<div className="mb-5 text-sm text-primary flex gap-1">
							<Link to={'/'}>Beranda</Link>
							<p>/</p>
							<Link to={'/products'}>Produk</Link>
							{searchQuery ? (
								<>
									<p>/</p>
									<Link
										to={`/products?search=${searchQuery}`}
									>
										{searchQuery.replace('%20', ' ')}
									</Link>
								</>
							) : subCategoryQuery && product.length > 0 ? (
								<>
									<p>/</p>
									<Link
										to={`/products?category=${categoryQuery}`}
									>
										{product[0]?.subCategory?.category
											?.name || 'Kategori'}
									</Link>
									<p>/</p>
									<Link
										to={`/products?category=${categoryQuery}&subCategory=${subCategoryQuery}`}
									>
										{product[0]?.subCategory?.name ||
											'Subkategori'}
									</Link>
								</>
							) : categoryQuery && product.length > 0 ? (
								<>
									<p>/</p>
									<Link
										to={`/products?category=${categoryQuery}`}
									>
										{product[0]?.subCategory?.category
											?.name || 'Kategori'}
									</Link>
								</>
							) : null}
						</div>

						<h1 className="font-semibold text-lg mb-3">
							{searchQuery
								? `Menampilkan hasil untuk "${searchQuery.replace('%20', ' ')}"`
								: subCategoryQuery || categoryQuery
									? 'Menampilkan ' +
										product.length +
										' Produk'
									: 'Semua Produk'}
						</h1>

						<div className="flex flex-wrap gap-[2%] w-full">
							{product.length > 0 ? (
								product.map((item, index) => (
									<ProductCard
										key={index}
										link={item.id}
										image={
											item.images.length > 0
												? item.images[0].image
												: ''
										}
										title={item.name}
										price={item.price}
										onStatus={handleStatus}
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
		</>
	);
};

export default ProductPage;
