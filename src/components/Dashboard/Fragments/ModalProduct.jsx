import Button from '../Elements/Button';
import Modal from '../Elements/Modal';

const ModalProduct = () => {
	return (
		<Modal id="delete">
			<div className="bg-white modal-box py-3 px-9">
				<h3 className="font-bold text-lg">Alert!</h3>
				<p className="py-4 flex">
					Are you sure to delete
					<span className="px-1 font-bold">"this product"</span>?
				</p>
				<div className="modal-action">
					<form method="dialog">
						<div className="flex mt-2 justify-end">
							<Button
								type="submit"
								variants="mr-2 px-4 py-2 border border-danger text-danger rounded-lg hover:text-red hover:border-red transition ease-in 5s "
							>
								Cancel
							</Button>
							<Button
								type="submit"
								variants="px-4 py-2 bg-danger rounded-lg text-white hover:bg-red transition ease-in 5s"
							>
								Delete
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Modal>
	);
};

export default ModalProduct;
