import { Link, useLocation } from 'react-router-dom';
import {
	Squares2X2Icon,
	ShoppingBagIcon,
	ShoppingCartIcon,
	ListBulletIcon,
	UserGroupIcon,
	UserIcon,
} from '@heroicons/react/24/solid';

const Navigation = () => {
	const isActive = useLocation().pathname;

	return (
		<>
			<Link
				to="/dashboard"
				className={`relative px-4 py-3 flex items-center rounded-lg space-x-4 ${
					isActive == '/dashboard'
						? 'bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<Squares2X2Icon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Dashboard</p>
			</Link>
			<Link
				to="/dashboard/product"
				className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
					isActive == '/dashboard/product'
						? 'bg-primary text-white'
						: 'text-gray' &&
							  isActive == '/dashboard/product/productdetails'
							? 'bg-primary text-white'
							: 'text-gray'
				} `}
			>
				<span>{<ShoppingBagIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Product</p>
			</Link>
			<Link
				to="/dashboard/order"
				className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
					isActive == '/dashboard/order'
						? 'bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<ShoppingCartIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Order</p>
			</Link>
			<Link
				to="/dashboard/category"
				className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
					isActive == '/dashboard/category'
						? 'bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<ListBulletIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Category</p>
			</Link>
			<Link
				to="/dashboard/user"
				className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
					isActive == '/dashboard/user'
						? 'bg-primary text-white'
						: 'text-gray' &&
							  isActive == '/dashboard/user/userdetails'
							? 'bg-primary text-white'
							: 'text-gray'
				} `}
			>
				<span>{<UserGroupIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">User</p>
			</Link>
			<Link
				to="/dashboard/role"
				className={`relative px-4 py-3 flex rounded-lg space-x-4  ${
					isActive == '/dashboard/role'
						? 'bg-primary text-white'
						: 'text-gray'
				} `}
			>
				<span>{<UserIcon className="w-6" />}</span>
				<p className="-mr-1 font-medium">Role</p>
			</Link>
		</>
	);
};

export default Navigation;
