/* eslint-disable import/no-absolute-path */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faMagnifyingGlass,
	faShoppingBag,
	faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment, useState } from 'react';
import Logo from '../../elements/logo/Index';
import NavbarIcon from '../../elements/navbarIcon/Index';

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);

	window.onscroll = () => {
		if (window.scrollY > 0) {
			setNavbar(true);
		} else {
			setNavbar(false);
		}
	};

	return (
		<Fragment>
			<nav
				className={` ${
					navbar ? 'shadow' : ''
				} bg-white py-5 px-20 sticky top-0 flex justify-between items-center z-10`}
			>
				<Logo />
				<div className="w-1/3 text-center relative">
					<form action="">
						<input
							type="text"
							className="border border-green-500 text-sm w-full rounded-full focus:border-green-700"
							placeholder="Cari produk yang anda inginkan"
						/>
						<button className="absolute p-2 right-2">
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</form>
				</div>
				<div className="flex items-center justify-end gap-5 text-gray-400 w-1/3">
					<NavbarIcon link={'/'} icon={faHome} />
					<NavbarIcon link={'/products'} icon={faShoppingBag} />
					<NavbarIcon link={'/cart'} icon={faShoppingCart} />
				</div>
			</nav>
		</Fragment>
	);
};

export default Navbar;
