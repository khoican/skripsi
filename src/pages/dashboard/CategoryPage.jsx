import { PlusIcon } from '@heroicons/react/24/solid';
import Button from '../../components/Dashboard/Elements/Button';
import Header from '../../components/Dashboard/Elements/Header';
import SearchInput from '../../components/Dashboard/Elements/SearchInput';
import Category from '../../components/Dashboard/Elements/Category';
import ModalCategory from '../../components/Dashboard/Fragments/ModalCategory';
import Input from '../../components/Dashboard/Elements/Input';
import { useState } from 'react';
// import axios from "axios";
import { postCategory } from '../../../services/category';

const DashboardCategory = () => {
	const [category, setCategory] = useState('');

	function handleCategory(e) {
		setCategory(e.target.value);
	}

	function handleSubmit() {
		postCategory({
			name: category,
		}).then((res) => {
			console.log(res);
		});
	}

	return (
		<>
			<div className="lg:ml-64 lg:pl-4 lg:flex lg:flex-col lg:w-75% pt-5 px-5">
				<Header title="Category" linkPage="Category" />
				<div className="flex justify-between mt-5 px-7">
					<div className="my-auto w-2/4">
						<SearchInput name="category" placeholder="Category" />
					</div>

					<Button
						type="button"
						variants="bg-success rounded-md py-2 px-3 text-white flex"
						onClick={() =>
							document.getElementById('add').showModal()
						}
					>
						Add Category
						<PlusIcon className="w-8 pl-2 mx-auto" />
					</Button>
					<ModalCategory
						variants="bg-success hover:bg-primary transition ease-in-out 5s"
						id="add"
						title="Add Category"
						btn="Save"
					>
						<div className="">
							<Input
								variants="rounded-lg ring-1 border-0 w-full ring-primary focus:ring-1 focus:outline-none focus:ring-success transition ease-in-out 5s py-2 px-3"
								type="text"
								name="categoryname"
								placeholder="Insert Category Name"
								onChange={handleCategory}
							/>
						</div>
						<div className="flex justify-end gap-2 pt-3">
							<Button
								type="submit"
								variants="mr-2 px-4 py-2 border border-danger hover:text-red-700 hover:border-red-700 transition ease-in-out 5s rounded-lg text-danger"
							>
								Cancel
							</Button>
							<Button
								type="submit"
								variants="px-4 py-2 rounded-lg bg-success text-white"
								onClick={handleSubmit}
							>
								Save
							</Button>
						</div>
					</ModalCategory>
				</div>
				<div className="my-10 px-7">
					<div className="py-4 px-4 w-full border rounded-lg bg-white shadow-lg ">
						<Category />
					</div>
				</div>
			</div>
		</>
	);
};

export default DashboardCategory;
