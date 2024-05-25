import Modal from '../Elements/Modal';

const ModalOrder = (props) => {
	const { id, children } = props;
	return (
		<Modal id={id}>
			<div className="bg-white modal-box py-3 px-9">
				<h3 className="font-bold text-lg">Alert!</h3>
				<p className="py-4 flex">
					Are you sure to delete
					<span className="px-1 font-bold">"this Order ?"</span>
				</p>
				<div className="modal-action">
					<form method="dialog">{children}</form>
				</div>
			</div>
		</Modal>
	);
};

export default ModalOrder;
