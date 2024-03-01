/* eslint-disable import/no-absolute-path */
import { Link } from 'react-router-dom';
import ProductCard from '../../components/user/fragments/productCard/Index';
import heroIcon from '/hero-icon.png';

const HomePage = () => {
	return (
		<main className="min-h-screen">
			<header className="flex flex-col p-5 h-screen bg-green-100">
				<div className="h-1/2 flex flex-col justify-center">
					<p className="text-sm">Selamat Datang di</p>
					<h1 className="text-3xl text-green-700 font-bold">
						AS-SAKINAH MART
					</h1>
					<p className="text-sm text-grey-700">
						Temukan semua kebutuhan anda disini
					</p>
					<a
						href=""
						className="bg-success text-white w-2/4 text-sm font-base text-center mt-3 p-3 rounded-xl"
					>
						Jelajahi Sekarang!
					</a>
				</div>
				<div className="h-1/2 flex justify-center">
					<img
						src={heroIcon}
						alt=""
						className="h-3/4 drop-shadow-lg"
					/>
				</div>
			</header>

			<main className="p-5">
				<button className="p-3 text-sm font-semibold bg-gray-200 rounded-lg shadow-md">
					Kategori
				</button>

				<div className="mt-5">
					<h1 className="font-semibold mb-3">Produk Paling Laris</h1>

					<div className="flex flex-wrap gap-[2%] w-full">
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>
				</div>

				<div className="mt-5">
					<h1 className="font-semibold mb-3">Semua Produk</h1>

					<div className="flex flex-wrap gap-[2%] w-full">
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
						<ProductCard />
					</div>

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
