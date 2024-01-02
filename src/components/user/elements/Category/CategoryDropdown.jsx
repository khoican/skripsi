/* eslint-disable react/react-in-jsx-scope */
import {
	ChevronDownIcon,
	HashtagIcon,
	ListBulletIcon,
} from '@heroicons/react/24/solid';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryDropdown = (props) => {
	const { category, children } = props

	const [open, setOpen] = useState(false)
	const handleDropdown = () => setOpen(!open)

	return (
		<Fragment>
			<div className={ `px-4 text-slate-700 cursor-pointer hover:bg-primary hover:text-white ${open && 'bg-primary text-white'}` } onClick={handleDropdown}>
				<div className={ `flex justify-between items-center px-2.5 py-2.5 border-b border-b-slate-300 hover:border-b-primary ${open && 'bg-primary text-white border-b-primary'}` } >
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
	const { subCategory = 'Sub Kategori', id } = props;

	return (
		<Fragment>
			<div className="ps-10 pe-4 text-slate-700 cursor-pointer hover:bg-green hover:text-white">
				<div className="px-2.5 py-2.5 border-b border-b-slate-300 hover:border-b-green">
					<Link to={`/products/sub=${id}`} className="flex items-center gap-2.5">
						<HashtagIcon className="w-5 h-5" />
						<p>{subCategory}</p>
					</Link>
				</div>
			</div>
		</Fragment>
	);
};

CategoryDropdown.SubCategory = SubCategory;

export default CategoryDropdown;
