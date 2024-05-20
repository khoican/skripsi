import Button from '../../elements/button/Index';

const Modal = (props) => {
	const { onDelete, onClose, children, title, onSave } = props;

	return (
		<div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
			<div className="bg-white w-2/4 rounded-md ">
				<div>
					<h1 className="text-lg font-semibold pt-5 px-5 pb-2 border-b border-gray-500 uppercase">
						{title}
					</h1>
				</div>
				<div className="p-5">
					{children}

					<div className="flex justify-end gap-3 mt-5">
						<Button
							text={'Batal'}
							onClick={onClose}
							style={
								'bg-white border border-gray-700 text-gray-700'
							}
						/>
						{onDelete && (
							<Button
								text={'Hapus'}
								onClick={onDelete}
								style={'bg-danger text-white'}
							/>
						)}

						{onSave && (
							<Button
								text={'Lanjutkan'}
								onClick={onSave}
								style={'bg-success text-white'}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
