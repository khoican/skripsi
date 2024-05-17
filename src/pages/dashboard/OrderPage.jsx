import Button from '../../components/Dashboard/Elements/Button';
import Header from '../../components/Dashboard/Elements/Header';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import { Link } from 'react-router-dom';
import TableOrder from '../../components/Dashboard/Fragments/TableOrder';

const DashboardOrder = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="User" linkPage="User" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput name="order" placeholder="Order" />
					</div>
				</div>
				<div className="my-10 px-7">
					<div className="mt-2 w-full bg-white shadow-lg px-2">
						<TableOrder />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardOrder;
