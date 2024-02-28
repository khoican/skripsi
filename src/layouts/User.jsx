import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const User = () => {
	return (
		<Fragment>
			<Outlet />
		</Fragment>
	);
};

export default User;
