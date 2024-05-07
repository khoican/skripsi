const Input = (props) => {
	const { text, note, id } = props;

	return (
		<div>
			<label className="text-md font-semibold" htmlFor={id}>
				{text}
			</label>
			<input
				type="text"
				className="form-input w-full border border-primary rounded-md focus:border-primary mt-2"
				id={id}
			/>
			{note && (
				<p className="text-xs">
					{' '}
					<span className="text-red-600 font-bold mr-1">*</span>
					{note}
				</p>
			)}
		</div>
	);
};

export default Input;
