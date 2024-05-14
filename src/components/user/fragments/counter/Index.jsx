import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
	incrementCounter,
	decrementCounter,
	counterValue,
} from '../../../../redux/actions/counterAction';
import { useEffect } from 'react';

const Counter = (props) => {
	const { id, limit = 100, main = true, value } = props;

	const dispatch = useDispatch();
	const count = useSelector((state) => state.counter[id]?.count || 0);

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
		limit > count && dispatch(incrementCounter(id));
	}

	function handleDecrement() {
		count > 0 && dispatch(decrementCounter(id));
	}

	useEffect(() => {
		dispatch(counterValue(id, parseInt(value)));
	}, [dispatch, id, value]);

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
