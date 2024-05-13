import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
	UserCircleIcon,
	PencilSquareIcon,
	ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

function DropdownProfileMenu() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-full text-primary bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primary hover:bg-primary hover:text-gray-50 transition-all ease-in-out 5s">
					<UserCircleIcon className="justify-center pr-5 w-10" />
					Admin
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							{({ active }) => (
								<Link
									to="/Dashboard/Profile"
									className={classNames(
										active
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-700',
										'px-4 py-2 text-sm flex justify-start',
									)}
								>
									<PencilSquareIcon className="w-5 " />
									Change Password
								</Link>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<a
									href="/Dashboard/"
									className={classNames(
										active
											? 'bg-gray-100 text-gray-900'
											: 'text-gray-700',
										'flex justify-start px-4 py-2 text-sm',
									)}
								>
									<ArrowLeftOnRectangleIcon className="w-5" />
									Logout
								</a>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}

export default DropdownProfileMenu;
