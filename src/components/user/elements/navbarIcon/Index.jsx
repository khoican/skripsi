import { Link, matchPath, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavbarIcon = (props) => {
	const { link, icon } = props;
	const currentPath = location.pathname.split('/')[1];

	return (
		<Link to={link}>
			<FontAwesomeIcon
				icon={icon}
				className={`${
					'/' + currentPath === link
						? 'text-green-700'
						: 'text-gray-400'
				} hover:text-green-700 w-7 h-7`}
			/>
		</Link>
	);
};

export default NavbarIcon;
