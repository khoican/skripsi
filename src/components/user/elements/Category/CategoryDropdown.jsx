/* eslint-disable react/react-in-jsx-scope */
import {
	ChevronDownIcon,
	HashtagIcon,
	ListBulletIcon,
} from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';

const CategoryDropdown = (props) => {
	const { category, children } = props

	const [open, setOpen] = useState(false)
	const handleClick = () => setOpen(!open)

	return (
		<Fragment>
			<div className="px-4 text-slate-700 cursor-pointer" onClick={handleClick}>
				<div className="flex justify-between items-center px-2.5 py-2.5 border-b border-b-slate-300" >
					<div className="flex items-center gap-2.5">
						<ListBulletIcon className="w-5 h-5" />
						<p>{category}</p>
					</div>
					<ChevronDownIcon className="w-3 h-3" />
				</div>
			</div>
			{open && children}
		</Fragment>
	);
};

const SubCategory = (props) => {
	const { subCategory = 'Sub Kategori' } = props;

	return (
		<Fragment>
			<div className="ps-10 pe-4 text-slate-700 cursor-pointer">
				<div className="flex items-center gap-2.5 px-2.5 py-2.5 border-b border-b-slate-300">
					<HashtagIcon className="w-5 h-5" />
					<p>{subCategory}</p>
				</div>
			</div>
		</Fragment>
	);
};

CategoryDropdown.SubCategory = SubCategory;

export default CategoryDropdown;
