import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';

const Input = (props) => {
	const { text, note, id, password } = props;
	const [hidden, setHidden] = useState(true);

	function togglePassword() {
		setHidden(!hidden);
	}

	return (
		<div>
			<label className="text-md font-semibold" htmlFor={id}>
				{text}
			</label>
			<div className="flex relative mt-1">
				<input
					type={password && hidden ? 'password' : 'text'}
					className={`form-input w-full border border-primary rounded-md focus:border-primary`}
					id={id}
				/>

				{password && (
					<div
						className="absolute inset-y-0 right-0 flex items-center justify-center pr-3 cursor-pointer h-full w-1/12"
						onClick={togglePassword}
					>
						{hidden ? (
							<FontAwesomeIcon
								icon={faEye}
								className="mb-0 text-lg"
							/>
						) : (
							<FontAwesomeIcon
								icon={faEyeSlash}
								className="mb-0 text-lg"
							/>
						)}
					</div>
				)}
			</div>
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
