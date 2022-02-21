export const setTickers = (items) => ({
	type: "SET",
	payload: items,
});

export const addTickers = (index) => ({
	type: "ADD",
	payload: index,
});

export const deleteTickers = (index) => ({
	type: "DELETE",
	payload: index,
});
