const initialState = {
	items: [],
	isLoading: false,
};

export const tickers = (state = initialState, action) => {
	switch (action.type) {
		case "SET":
			return {
				...state,
				items: action.payload,
			};

		case "DELETE":
			return {
				...state,
				items: state.items.filter((obj, i) => i !== action.payload),
			};

		case "ADD":
			return {
				...state,
				items: state.items.filter((obj, i) => i === action.payload),
			};
		default:
			return state;
	}
};
