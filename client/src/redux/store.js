import { createStore, combineReducers } from "redux";
import { tickers } from "./tickersReducer";

export const store = createStore(
	combineReducers({
		tickers,
	})
);
