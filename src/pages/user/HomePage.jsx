/* eslint-disable import/no-absolute-path */
import { Link } from 'react-router-dom';
// import ProductCard from '../../components/user/fragments/productCard/Index';
import { getAllProducts } from '../../../services/product';
import { useEffect } from 'react';
// import heroIcon from '/hero-icon.png';

const HomePage = () => {
	useEffect(() => {
		getAllProducts((data) => {
			console.log(data);
		});
	}, []);

	return (
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

			<main className="p-5 max-w-screen-xl px-20">
				<div className="mt-5">
					<h1 className="font-semibold mb-3">Produk Paling Laris</h1>

					<div className="flex flex-wrap gap-[2%] w-full">
						{/* {getAllProduct.map((item, index) => (
							<ProductCard
								key={index}
								link={'/'}
								image={item.image}
								title={item.name}
								price={item.price}
							/>
						))} */}
					</div>
				</div>

				<div className="mt-5">
					<h1 className="font-semibold mb-3">Semua Produk</h1>

					<div className="flex flex-wrap gap-[2%] w-full"></div>

					<div className="w-full">
						<Link
							to={'/products'}
							className="text-right text-xs text-green-700"
						>
							Lihat produk lainnya...
						</Link>
					</div>
				</div>
			</main>
		</main>
	);
};

export default HomePage;
