export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RESET_COUNTER = 'RESET_COUNTER';
export const COUNTER_VALUE = 'COUNTER_VALUE';

export const incrementCounter = (id) => ({
	type: INCREMENT_COUNTER,
	payload: id,
});

export const decrementCounter = (id) => ({
	type: DECREMENT_COUNTER,
	payload: id,
});

export const resetCounter = () => ({
	type: RESET_COUNTER,
});

export const counterValue = (id, value) => ({
	type: 'COUNTER_VALUE',
	payload: { id, value },
});
