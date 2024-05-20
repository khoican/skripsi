/* eslint-disable import/no-absolute-path */
import { Link } from 'react-router-dom';
import ProductCard from '../../components/user/fragments/productCard/Index';
import CategoriesMenu from '../../components/user/fragments/categoriesMenu/Index';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/actions/productsAction';
import Alert from '../../components/user/elements/alert/Index';

const HomePage = () => {
	const dispatch = useDispatch();
	const [status, setStatus] = useState();
	const products = useSelector((state) => state.fetchProducts.products);

	useEffect(() => {
		dispatch(fetchProducts(0, 10));
	}, [dispatch]);

	const handleStatus = (message) => {
		setStatus(message);

		setTimeout(() => {
			setStatus('');
		}, 5000);
	};

	const handleClose = () => {
		setStatus('');
	};

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
			<main className="min-h-screen">
				<header className="flex flex-col items-center justify-center p-5 h-[80vh] bg-green-700">
					<h1 className="text-5xl font-medium text-white">
						Selamat Datang
					</h1>
					<p className="text-md text-white font-extralight">
						di <b className="text-yellow-100">As-Sakinah Mart</b>,
						tempat belanja terpercaya dan amanah
					</p>
					<a
						href=""
						className="text-white py-3 px-5 mt-5 bg-yellow-300 rounded-full"
					>
						Jelajahi Sekarang
					</a>
				</header>

				<main className="p-5 max-w-screen-xl mx-auto px-20 flex gap-5 mt-5">
					<CategoriesMenu />

					<div className="w-3/4">
						<div className="">
							<h1 className="font-semibold text-lg mb-3">
								Produk Terbaru
							</h1>

							<div className="flex flex-wrap gap-[2%] w-full">
								{products.map((item, index) => (
									<ProductCard
										key={index}
										link={item.id}
										id={item.id}
										image={
											item.images.length > 0
												? item.images[0].image
												: ''
										}
										title={item.name}
										price={item.price}
										onStatus={handleStatus}
									/>
								))}
							</div>
							<Link
								to={'/products'}
								className="text-xs text-green-700"
							>
								Lihat produk lainnya...
							</Link>
						</div>
					</div>
				</main>
			</main>
		</>
	);
};

export default HomePage;
