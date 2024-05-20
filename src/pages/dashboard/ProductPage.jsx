import { PlusIcon } from '@heroicons/react/24/solid';
import Header from '../../components/Dashboard/Elements/Header';
import Button from '../../components/Dashboard/Elements/Button';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import { Link } from 'react-router-dom';
import ModalProduct from '../../components/Dashboard/Fragments/ModalProduct';
import TableProduct from '../../components/Dashboard/Fragments/TableProduct';

const DashboardProduct = () => {
	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="Product" linkPage="Product" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput
							name="productname"
							placeholder="Product Name"
						/>
					</div>

					<div className="flex">
						<Link to={'/dashboard/product/productdetails'}>
							<Button
								type="button"
								variants="flex bg-success rounded-md py-2 px-3 text-white hover:bg-primary transition-all ease-in 5s"
							>
								Add Product
								<PlusIcon className="w-8 pl-2 mx-auto" />
							</Button>
						</Link>
					</div>
				</div>
				<div className="my-10 px-7">
					<div className="mt-2 py-2 w-full bg-white rounded-md shadow-lg px-2">
						<TableProduct />
						<ModalProduct id="delete" />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardProduct;
