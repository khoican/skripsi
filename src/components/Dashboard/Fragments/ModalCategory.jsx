import Modal from '../Elements/Modal';

const ModalCategory = (props) => {
	const { children, title, id } = props;
	return (
		<Modal
			id={id}
			variants="border-none z-10 w-[600px] m-auto bg-white opacity-100"
		>
			<div className="bg-white modal-box py-4 px-9">
				<h3 className="text-black font-bold text-lg pb-2">{title}</h3>
				<div className="modal-action pb-2">
					<form method="dialog">{children}</form>
				</div>
			</div>
		</Modal>
	);
};

export default ModalCategory;
