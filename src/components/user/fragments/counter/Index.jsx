import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementCounter,
	decrementCounter,
} from '../../../../actions/counterAction';

const Counter = (props) => {
	const { limit = 100, main = true } = props;

	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter.count);
	const leftButtonStyle = `p-2 flex items-center justify-center ${
		main === true
			? 'bg-gray-400 text-white active:bg-gray-600'
			: 'border border-b-gray-400 border-t-gray-400 border-l-gray-400 text-black w-6 h-6'
	}`;
	const rightButtonStyle = `p-2 flex items-center justify-center ${
		main === true
			? 'bg-gray-400 text-white active:bg-gray-600'
			: 'border border-b-gray-400 border-t-gray-400 border-r-gray-400 text-black w-6 h-6'
	}`;
	const iconStyle = `${main === true ? '' : 'w-4 h-4'}`;

	function handleIncrement() {
		limit > count && dispatch(incrementCounter());
	}

	function handleDecrement() {
		count > 0 && dispatch(decrementCounter());
	}

	return (
		<div className="flex">
			<button className={leftButtonStyle} onClick={handleDecrement}>
				<FontAwesomeIcon icon={faMinus} className={iconStyle} />
			</button>
			<input
				type="text"
				className={`form-input text-black text-sm border-gray-400 outline-transparent text-center w-auto ${
					main === true ? 'w-full' : 'w-32 h-6'
				}`}
				readOnly
				value={count}
			/>
			<button className={rightButtonStyle} onClick={handleIncrement}>
				<FontAwesomeIcon icon={faPlus} className={iconStyle} />
			</button>
		</div>
	);
};

export default Counter;
