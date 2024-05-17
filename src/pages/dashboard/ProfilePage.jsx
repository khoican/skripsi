import Header from '../../components/Dashboard/Elements/Header';
import ProfileLayouts from '../../components/Dashboard/Layouts/ProfileLayouts';

const DashboardProfilePage = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="Change Password" linkPage="Profile" />
				<div className="mx-auto mt-5 px-7">
					<ProfileLayouts />
				</div>
			</div>
		</>
	);
};

export default DashboardProfilePage;
