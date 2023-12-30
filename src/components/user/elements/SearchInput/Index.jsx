/* eslint-disable react/react-in-jsx-scope */
import { Fragment } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchInput = () => {
    return (
		<Fragment>
			<div className="flex items-center w-2/6">
				<input
					type="text"
					placeholder="Search"
					className="w-full p-2 border border-primary rounded-xl text-sm px-5 py-2"
				/>
				<button className="relative right-8">
					<MagnifyingGlassIcon className="w-5 h-5" />
				</button>
			</div>
		</Fragment>
    );
};

export default SearchInput;
