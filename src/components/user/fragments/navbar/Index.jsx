/* eslint-disable import/no-absolute-path */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHouse,
	faMagnifyingGlass,
	faBagShopping,
	faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { useState } from 'react';

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
		<nav
			className={` ${
				navbar ? 'bg-white shadow' : 'bg-green-100'
			} py-3 px-5 sticky top-0 flex justify-between items-center z-10`}
		>
			<div className="h-8 w-8">
				<img src={logo} alt="" />
			</div>
			<div></div>
			<div className="flex items-center gap-3 text-gray-400">
				<FontAwesomeIcon
					icon={faMagnifyingGlass}
					className="text-black"
				/>
				<Link to={'/'}>
					<FontAwesomeIcon
						icon={faHouse}
						className="text-green-900"
					/>
				</Link>
				<Link to={'/products'}>
					<FontAwesomeIcon icon={faBagShopping} />
				</Link>
				<Link to={'/cart'}>
					<FontAwesomeIcon icon={faCartShopping} />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
