import { Link, useLocation } from 'react-router-dom';
import {
	Squares2X2Icon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	ListBulletIcon,
	UserGroupIcon,
	UserIcon,
} from '@heroicons/react/24/solid';

const NavLink = () => {
	const isActive = useLocation().pathname;

	return (
		<>
			<Link
				to="/dashboard"
				className={`relative px-4 cursor-pointer py-3 flex items-center rounded-lg hover:bg-gray-200 transition-all ease-in 5s space-x-4 ${
					isActive == '/dashboard'
						? 'bg-primary hover:bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<Squares2X2Icon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Dashboard</p>
			</Link>
			<Link
				to="/dashboard/product"
				className={`relative px-4 py-3 flex rounded-lg space-x-4 hover:bg-gray-200 transition-all ease-in 5s  ${
					isActive == '/dashboard/product'
						? 'bg-primary hover:bg-primary text-white'
						: 'text-gray' &&
							  isActive == '/dashboard/product/productdetails'
							? 'bg-primary hover:bg-primary text-white'
							: 'text-gray' &&
								  isActive ==
										'/dashboard/product/productdetails/:id'
								? 'bg-primary hover:bg-primary text-white'
								: 'text-gray'
				} `}
			>
				<span>{<ShoppingBagIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Product</p>
			</Link>
			<Link
				to="/dashboard/order"
				className={`relative px-4 py-3 flex rounded-lg space-x-4 hover:bg-gray-200 transition-all ease-in 5s  ${
					isActive == '/dashboard/order'
						? 'bg-primary hover:bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<ShoppingCartIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Order</p>
			</Link>
			<Link
				to="/dashboard/category"
				className={`relative px-4 py-3 flex rounded-lg space-x-4 hover:bg-gray-200 transition-all ease-in 5s  ${
					isActive == '/dashboard/category'
						? 'bg-primary hover:bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<ListBulletIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Category</p>
			</Link>
			<Link
				to="/dashboard/user"
				className={`relative px-4 py-3 flex rounded-lg space-x-4 hover:bg-gray-200 transition-all ease-in 5s  ${
					isActive == '/dashboard/user'
						? 'bg-primary hover:bg-primary text-white'
						: 'text-gray' &&
							  isActive == '/dashboard/user/userdetails'
							? 'bg-primary hover:bg-primary text-white'
							: 'text-gray'
				} `}
			>
				<span>{<UserGroupIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">User</p>
			</Link>
		</>
	);
};

export default NavLink;
