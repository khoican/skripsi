import { Link, matchPath, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarIcon = (props) => {
	const { link, icon, onClick, badge } = props;
	const currentPath = location.pathname.split('/')[1];

	return (
		<Link to={link} className="relative">
			{badge && (
				<div className="w-4 h-4 absolute -right-1 -top-1 bg-danger rounded-full flex items-center justify-center">
					<p className="text-xs text-white">{badge}</p>
				</div>
			)}
			<FontAwesomeIcon
				icon={icon}
				className={`${
					'/' + currentPath === link
						? 'text-green-700'
						: 'text-gray-400'
				} hover:text-green-700 w-7 h-7`}
				onClick={onClick}
			/>
		</Link>
	);
};

export default NavbarIcon;
