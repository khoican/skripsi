/* eslint-disable react/react-in-jsx-scope */
import {
	ChevronDownIcon,
	HashtagIcon,
	ListBulletIcon,
} from '@heroicons/react/24/solid';
import { Fragment } from 'react';

const CategoryDropdown = () => {
	return (
		<Fragment>
			<div className="px-4 text-slate-700">
				<div className="flex justify-between items-center px-2.5 py-2.5 border-b border-b-slate-300">
					<div className="flex items-center gap-2.5">
						<ListBulletIcon className="w-5 h-5" />
						<p>Category Name</p>
					</div>
					<ChevronDownIcon className="w-3 h-3" />
				</div>
			</div>

			<SubCategoryDropdown>Sub Category</SubCategoryDropdown>
		</Fragment>
	);
};

const SubCategoryDropdown = (props) => {
	const { children } = props;

	return (
		<Fragment>
			<div className="ps-10 pe-4 text-slate-700">
				<div className="flex items-center gap-2.5 px-2.5 py-2.5 border-b border-b-slate-300">
					<HashtagIcon className="w-5 h-5" />
					<p>{children}</p>
				</div>
			</div>
		</Fragment>
	);
};

CategoryDropdown.SubCategoryDropdown = SubCategoryDropdown;

export default CategoryDropdown;
