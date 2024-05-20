import { Outlet } from 'react-router-dom';
import editProfile from '/edit-user.png';

const EditProfile = () => {
	return (
		<main className="h-auto p-10 mx-auto px-40 gap-5 bg-gray-50">
			<div className="flex rounded-xl shadow-md bg-white p-10">
				<div className="w-1/2">
					<Outlet />
				</div>
				<div className="w-1/2 flex items-center justify-center">
					<img src={editProfile} alt="" className="w-2/3" />
				</div>
			</div>
		</main>
	);
};

export default EditProfile;
