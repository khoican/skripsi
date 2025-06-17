// productPage.jsx
import { useEffect, useState, useCallback } from 'react';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import ProductCard from '../../components/user/fragments/productCard/Index';
import { Link, useLocation } from 'react-router-dom';
import noData from '/no-data.png';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsAction';
import Alert from '../../components/user/elements/alert/Index';
import { useProductSearch } from '../../hooks/useProductSearch';

const ProductPage = () => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState();
	const location = useLocation();
	const [isLoading, setIsLoading] = useState(true);

	const urlParams = new URLSearchParams(location.search);
	const searchQueryFromUrl = urlParams.get('search') || '';

	let products = useSelector((state) => state.fetchProducts.products);

	const categoryQuery = urlParams.get('category') || '';
	const subCategoryQuery = urlParams.get('subCategory') || '';

	const {
		searchResults,
		isSearching,
		searchError,
		isInitialized,
		searchProgress,
		updateProducts,
		search,
		clearSearch,
		searchStats,
		executionTime
	} = useProductSearch();

	// Fetch products
	useEffect(() => {
		setIsLoading(true);
		dispatch(fetchProducts()).then(() => {
			setIsLoading(false);
		}).catch((error) => {
			console.error('Failed to fetch products:', error);
			setIsLoading(false);
		});
	}, [dispatch]);

	// Update search engine when products change
	useEffect(() => {
		if (products && products.length > 0) {
			console.log('Updating products in search engine:', products.length);
			updateProducts(products);
		}
	}, [products, updateProducts]);

	// Handle search when URL changes or search engine is ready
	const performSearch = useCallback(() => {
		if (searchQueryFromUrl && products.length > 0) {
			console.log('Performing search for:', searchQueryFromUrl, 'Initialized:', isInitialized);
			search(searchQueryFromUrl, {
				minScore: 0.3,
				maxResults: 300,
				exactMatchBonus: 10,
				similarityThreshold: 0.8,
			});
		}
	}, [searchQueryFromUrl, products, search, isInitialized]);

	// Effect for handling search
	useEffect(() => {
		if (searchQueryFromUrl && products.length > 0) {
			// Always attempt to search, the hook will handle initialization
			performSearch();
		} else if (!searchQueryFromUrl) {
			clearSearch();
		}
	}, [searchQueryFromUrl, products.length, performSearch, clearSearch]);

	// Additional effect to retry search when initialization completes
	useEffect(() => {
		if (isInitialized && searchQueryFromUrl && products.length > 0) {
			console.log('Search engine initialized, performing search');
			performSearch();
		}
	}, [isInitialized, searchQueryFromUrl, products.length, performSearch]);

	const handleStatus = (message) => {
		setStatus(message);
		setTimeout(() => {
			setStatus('');
		}, 5000);
	};

	const handleClose = () => {
		setStatus('');
	};

	// Determine which products to display
	let product = [];
	let displayExecutionTime = null;

	if (searchQueryFromUrl && searchResults && searchResults.length > 0) {
		product = searchResults;
		displayExecutionTime = executionTime;
	} else if (searchQueryFromUrl && !isSearching && isInitialized) {
		// If search completed but no results, show empty array
		product = [];
		displayExecutionTime = executionTime;
	} else if (categoryQuery && subCategoryQuery) {
		product = products.filter(
			(product) => product.subCategoryId == subCategoryQuery,
		);
	} else if (categoryQuery) {
		product = products.filter(
			(product) => product.categoryId == categoryQuery,
		);
	} else if (!searchQueryFromUrl && !categoryQuery && !subCategoryQuery && products.length > 0) {
		product = products;
	}

	// Show loading state
	if (isLoading || (searchQueryFromUrl && isSearching) || (searchQueryFromUrl && !isInitialized && products.length > 0)) {
		return (
			<div className="w-full h-screen flex flex-col items-center justify-center">
				<p className="text-sm font-light mb-4">
					{searchQueryFromUrl
						? '... pencarian data berlangsung, tunggu sebentar'
						: '... memuat data produk, tunggu sebentar'
					}
				</p>
				
				{searchQueryFromUrl && (
					<>
						{isSearching && searchProgress > 0 && (
							<div className="w-64 bg-gray-200 rounded-full h-2 mb-2">
								<div 
									className="bg-blue-600 h-2 rounded-full transition-all duration-300"
									style={{ width: `${searchProgress}%` }}
								></div>
							</div>
						)}
						
						{!isInitialized && (
							<p className="text-xs text-gray-500 mt-2">
								Menginisialisasi search engine...
							</p>
						)}
						
						{isInitialized && isSearching && (
							<p className="text-xs text-green-600 mt-2">
								Search engine siap, mencari...
							</p>
						)}
					</>
				)}
			</div>
		);
	}

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

			{searchError && (
				<Alert
					message={`Error pencarian: ${searchError}`}
					onSuccess={false}
					success="error"
					onClick={() => {}}
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
							{searchQueryFromUrl ? (
								<>
									<p>/</p>
									<Link to={`/products?search=${searchQueryFromUrl}`}>
										{decodeURIComponent(searchQueryFromUrl)}
									</Link>
								</>
							) : subCategoryQuery && product.length > 0 ? (
								<>
									<p>/</p>
									<Link to={`/products?category=${categoryQuery}`}>
										{product[0]?.subCategory?.category?.name || 'Kategori'}
									</Link>
									<p>/</p>
									<Link to={`/products?category=${categoryQuery}&subCategory=${subCategoryQuery}`}>
										{product[0]?.subCategory?.name || 'Subkategori'}
									</Link>
								</>
							) : categoryQuery && product.length > 0 ? (
								<>
									<p>/</p>
									<Link to={`/products?category=${categoryQuery}`}>
										{product[0]?.subCategory?.category?.name || 'Kategori'}
									</Link>
								</>
							) : null}
						</div>

						<h1 className="font-semibold text-lg mb-3">
							{searchQueryFromUrl
								? `Menampilkan hasil untuk "${decodeURIComponent(searchQueryFromUrl)}"`
								: subCategoryQuery || categoryQuery
									? `Menampilkan ${product.length} Produk`
									: 'Semua Produk'}
						</h1>

						{searchQueryFromUrl && displayExecutionTime !== null && searchStats && (
							<div className="text-xs -mt-3 mb-3 text-gray-600 flex flex-wrap gap-4">
								<span>Waktu pencarian: {displayExecutionTime} ms</span>
								<span>Ditemukan {searchStats.totalResults} hasil</span>
								<span>Ditampilkan {searchStats.displayedResults} produk</span>
								<span className={isInitialized ? "text-green-600" : "text-orange-600"}>
									{isInitialized ? '✅' : '⚠️'} Search engine {isInitialized ? 'siap' : 'belum siap'}
								</span>
							</div>
						)}

						{searchQueryFromUrl && searchError && (
							<div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
								<p className="text-red-600 text-sm">
									❌ Search engine error: {searchError}
								</p>
								<button 
									onClick={() => window.location.reload()} 
									className="text-blue-600 text-xs mt-1 underline"
								>
									Muat ulang halaman
								</button>
							</div>
						)}

						<div className="flex flex-wrap gap-[2%] w-full">
							{product.length > 0 ? (
								product.map((item, index) => (
									<ProductCard
										key={item.id || index}
										link={item.id}
										image={
											item.images && item.images.length > 0
												? item.images[0].image
												: ''
										}
										title={item.name}
										price={item.price}
										onStatus={handleStatus}
										searchScore={item.searchScore}
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
										{searchQueryFromUrl
											? 'Tidak ada produk yang sesuai dengan pencarian'
											: 'Tidak ada produk di kategori ini'
										}
									</p>
									{searchQueryFromUrl && (
										<div className="text-center mb-4">
											<p className="text-sm text-gray-600 mb-2">
												Tips pencarian:
											</p>
											<ul className="text-xs text-gray-500 list-disc list-inside">
												<li>Periksa ejaan kata kunci</li>
												<li>Gunakan kata kunci yang lebih umum</li>
												<li>Coba kata kunci yang berbeda</li>
											</ul>
										</div>
									)}
									<Link
										to={'/products'}
										className="w-full text-center font-semibold text-primary underline"
									>
										Kembali ke halaman produk
									</Link>
								</div>
							)}
						</div>

						{process.env.NODE_ENV === 'development' && searchQueryFromUrl && (
							<div className="mt-8 p-4 bg-gray-50 rounded-lg border">
								<h3 className="font-semibold text-sm mb-2">Debug Information:</h3>
								<div className="text-xs text-gray-600 space-y-1">
									<p>Search Query: "{searchQueryFromUrl}"</p>
									<p>Products Loaded: {products.length}</p>
									<p>Search Results: {searchResults ? searchResults.length : 'null'}</p>
									<p>Is Searching: {isSearching ? 'Yes' : 'No'}</p>
									<p>Is Initialized: {isInitialized ? 'Yes' : 'No'}</p>
									<p>Search Error: {searchError || 'None'}</p>
									{searchStats && (
										<>
											<p>Total Results Found: {searchStats.totalResults}</p>
											<p>Results Displayed: {searchStats.displayedResults}</p>
											<p>Execution Time: {searchStats.executionTime}ms</p>
										</>
									)}
								</div>
							</div>
						)}
					</div>
				</div>
			</main>
		</>
	);
};

export default ProductPage;