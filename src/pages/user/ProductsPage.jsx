import { useEffect, useState } from 'react';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import ProductCard from '../../components/user/fragments/productCard/Index';
import { Link, useLocation, useParams } from 'react-router-dom';
import noData from '/no-data.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsAction';
import Alert from '../../components/user/elements/alert/Index';
import { searchProductByName } from '../../../services/product';
import { searchProducts } from '../../../helper/search';

const ProductPage = () => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState();
	const [search, setSearch] = useState('');
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	let products = useSelector((state) => state.fetchProducts.products);

	const searchQuery =
		new URLSearchParams(location.search).get('search') || '';
	const categoryQuery =
		new URLSearchParams(location.search).get('category') || '';
	const subCategoryQuery =
		new URLSearchParams(location.search).get('subCategory') || '';

	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchProducts(500, 400)).then(() => {
			setIsLoading(false);
		});
	}, [dispatch]);

	const getProductBySearch = () => {
		return new Promise((resolve, reject) => {
			const worker = new Worker(
				new URL('../../../helper/search/worker', import.meta.url),
				{ type: 'module' },
			);

			worker.postMessage({ searchQuery, products });

			worker.onmessage = ({ data }) => {
				resolve(data);
				worker.terminate();
			};

			worker.onerror = (error) => {
				reject(error);
				worker.terminate();
			};
		});

		// return searchProducts(searchQuery, products);
	};

	useEffect(() => {
		if (searchQuery && products.length > 0) {
			setIsLoading(true);
			const fetchSearchProduct = async () => {
				try {
					const data = await getProductBySearch();
					setSearch(data);
				} catch (error) {
					console.error('Error fetching search results:', error);
				} finally {
					setIsLoading(false);
				}
			};
			fetchSearchProduct();
		}
	}, [searchQuery, products]);

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

	if (searchQuery && search && search.data) {
		product = search.data;
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

	console.log(product.length);

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

			{isLoading ? (
				<div className="w-full h-screen flex items-center justify-center">
					<p className="text-sm font-light">
						... pencarian data berlangsung, tunggu sebentar
					</p>
				</div>
			) : (
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

							{searchQuery &&
								search &&
								search.executionTime != undefined && (
									<p className="text-xs -mt-3 mb-3">
										Waktu pencarian : {''}
										{search.executionTime.toFixed(2)} ms
									</p>
								)}

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
			)}
		</>
	);
};

export default ProductPage;
