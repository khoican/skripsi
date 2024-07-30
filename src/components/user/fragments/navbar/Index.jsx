import React, { Fragment, useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBars,
	faCaretDown,
	faCircle,
	faClipboard,
	faHome,
	faKey,
	faList,
	faMagnifyingGlass,
	faRightFromBracket,
	faShoppingBag,
	faShoppingCart,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../elements/logo/Index';
import NavbarIcon from '../../elements/navbarIcon/Index';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../elements/button/Index';
import { logoutUser } from '../../../../../helper/logoutUser';
import Alert from '../../elements/alert/Index';
import { decryptData } from '../../../../../helper/cryptoData';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../../../../redux/actions/categoryAction';
import { fetchSubCategories } from '../../../../redux/actions/subCategoryAction';

const Navbar = () => {
	let user = localStorage.getItem('user') && decryptData('user');
	let cart = localStorage.getItem('cart') && decryptData('cart');
	const [navbar, setNavbar] = useState(false);
	const [openDropdown, setOpenDropdown] = useState(null);
	const [status, setStatus] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const navigate = useNavigate();
	const dropdownRef = useRef(null);
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.fetchCategories.category);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	useEffect(() => {
		const handleScroll = () => {
			setNavbar(window.scrollY > 0);
		};
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleOpenDropdown = (label) => {
		setOpenDropdown((prev) => (prev === label ? null : label));
	};

	const handleLogout = async () => {
		const response = await logoutUser();

		if (response.status !== 'success') {
			setStatus(response);
			setTimeout(() => {
				setStatus('');
			}, 5000);
		}

		navigate('/');
		setStatus(response);
		setOpenDropdown(null);

		setTimeout(() => {
			setStatus('');
		}, 5000);
	};

	const handleSearchInput = (e) => {
		setSearchInput(e.target.value);
	};

	const handleNavigate = (e) => {
		if (searchInput && (e.type === 'click' || e.keyCode === 13)) {
			navigate(`/products?search=${searchInput}`);
		}
	};

	let cartTotal = cart ? cart.length : 0;

	return (
		<Fragment>
			<nav
				className={` ${navbar ? 'shadow' : ''} bg-white py-5 px-5 md:px-20 sticky top-0 flex justify-between items-center z-10`}
			>
				<Logo />
				<div className="w-5/12 md:w-1/3 text-center relative">
					<input
						type="text"
						className="border border-green-500 text-sm w-full rounded-full focus:border-green-700 placeholder:opacity-0 md:placeholder:opacity-100"
						placeholder="Cari apa hari ini?..."
						onChange={handleSearchInput}
						onKeyDown={handleNavigate}
					/>
					<button
						className="absolute p-2 right-2 text-green-800"
						onClick={handleNavigate}
					>
						<FontAwesomeIcon icon={faMagnifyingGlass} />
					</button>
				</div>
				<div className="flex items-center justify-end gap-3 md:gap-5 text-gray-400 w-4/12 md:w-1/3">
					<NavbarIcon
						link={'/'}
						icon={faHome}
						onClick={() => setOpenDropdown(null)}
						variant={'hidden md:block'}
					/>
					<NavbarIcon
						link={'/products'}
						icon={faShoppingBag}
						onClick={() => setOpenDropdown(null)}
						variant={'hidden md:block'}
					/>
					<NavbarIcon
						link={'/cart'}
						icon={faShoppingCart}
						onClick={() => setOpenDropdown(null)}
						variant={user ? 'block' : 'hidden md:block'}
					/>
					{user ? (
						<Dropdown
							icon={faUser}
							isOpen={openDropdown === 'userDropdown'}
							onClick={() => handleOpenDropdown('userDropdown')}
						/>
					) : (
						<Link
							to={'/login'}
							className={`text-sm rounded-md border border-success text-success hover:text-white hover:bg-primary p-3`}
						>
							Login
						</Link>
					)}
					<Dropdown
						icon={faBars}
						isOpen={openDropdown === 'menuDropdown'}
						onClick={() => handleOpenDropdown('menuDropdown')}
						variant={'block md:hidden'}
					/>
				</div>
				{openDropdown === 'userDropdown' && (
					<div
						ref={dropdownRef}
						className="absolute right-5 md:right-20 top-20 bg-white shadow-md p-4 rounded-md flex flex-col gap-2"
					>
						{user.role !== 'GUEST' && (
							<>
								<DropdownMenu
									icon={faUser}
									text="Edit Profil"
									link={'/editprofile'}
									onClick={() => setOpenDropdown(null)}
								/>
								<DropdownMenu
									icon={faKey}
									text="Ganti Password"
									link={'/changepassword'}
									onClick={() => setOpenDropdown(null)}
								/>
							</>
						)}
						<DropdownMenu
							icon={faClipboard}
							text="Riwayat Transaksi"
							link={'/orderhistory'}
							onClick={() => setOpenDropdown(null)}
						/>
						<Button
							style={
								'border border-danger text-danger hover:bg-danger hover:text-white'
							}
							icon={faRightFromBracket}
							text={'Logout'}
							onClick={handleLogout}
						/>
					</div>
				)}

				{openDropdown === 'menuDropdown' && (
					<div
						ref={dropdownRef}
						className="absolute right-0 md:right-20 top-0 bg-white shadow-md px-4 py-10 rounded-md h-screen overflow-y-auto w-2/3"
					>
						<div className="flex flex-col gap-4">
							<DropdownMenu
								icon={faHome}
								text="Beranda"
								link={'/'}
								onClick={() => setOpenDropdown(null)}
							/>
							<DropdownMenu
								icon={faShoppingBag}
								text="Produk"
								link={'/products'}
								onClick={() => setOpenDropdown(null)}
							/>
							<DropdownMenu
								icon={faShoppingCart}
								text="Keranjang"
								link={'/cart'}
								onClick={() => setOpenDropdown(null)}
							/>

							<div className="flex items-center mt-10 justify-between cursor-pointer text-gray-600">
								<p>Kategori Produk</p>
							</div>

							{categories.length > 0 &&
								categories.map((item, index) => (
									<CategoriesDropdown
										name={item.name}
										id={item.id}
									/>
								))}
						</div>
					</div>
				)}
			</nav>

			{status && (
				<Alert
					message={status.message}
					onSuccess={status.status}
					success="success"
					onClick={() => setStatus('')}
				/>
			)}
		</Fragment>
	);
};

export default Navbar;

const CategoriesDropdown = (props) => {
	const { name, id } = props;
	const dispatch = useDispatch();
	const subCategories = useSelector(
		(state) => state.fetchSubCategories.category,
	);
	const [open, setOpen] = useState(null);

	const handleOpen = (categoryId) => {
		setOpen(open === categoryId ? null : categoryId);
	};

	useEffect(() => {
		dispatch(fetchSubCategories());
	}, [dispatch]);

	const handleSubCategory = subCategories.filter(
		(item) => item.categoryId === id,
	);

	return (
		<>
			{handleSubCategory.length > 0 ? (
				<div
					className="ms-4 flex justify-between items-center cursor-pointer hover:text-green-900"
					onClick={() => handleOpen(id)}
				>
					<div className="flex items-center gap-5">
						<FontAwesomeIcon icon={faList} />
						<p className="capitalize">{name}</p>
					</div>
					<FontAwesomeIcon
						icon={faCaretDown}
						className={`transition-all`}
					/>
				</div>
			) : (
				<Link
					to={`/products/${id}`}
					className="ms-4 flex justify-between items-center cursor-pointer hover:text-green-900"
				>
					<div className="flex items-center gap-5">
						<FontAwesomeIcon icon={faList} />
						<p className="capitalize">{name}</p>
					</div>
				</Link>
			)}

			{open === id &&
				handleSubCategory.map((item, index) => (
					<Link
						to={`/products/${item.id}`}
						key={index}
						className="flex items-center gap-5 ms-8"
					>
						<FontAwesomeIcon icon={faCircle} className="w-2" />
						<p className="capitalize">{item.name}</p>
					</Link>
				))}
		</>
	);
};

const Dropdown = ({ icon, onClick, isOpen, variant }) => {
	return (
		<div
			className={`cursor-pointer text-gray-400 hover:text-green-700 ${isOpen ? 'text-green-700' : ''} ${variant}`}
			onClick={onClick}
		>
			<FontAwesomeIcon icon={icon} className=" w-7 h-7" />
		</div>
	);
};

const DropdownMenu = ({ icon, text, link, onClick }) => {
	return (
		<Link
			to={link}
			className="flex items-center gap-3 cursor-pointer text-gray-600 hover:text-primary"
			onClick={onClick}
		>
			<div className="w-5 h-5 flex justify-center">
				<FontAwesomeIcon icon={icon} className="h-5" />
			</div>
			<p>{text}</p>
		</Link>
	);
};
