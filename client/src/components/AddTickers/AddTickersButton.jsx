import React from "react";
import { AddButton } from "./AddTickers.Styled";

export const AddTickersButton = ({ addTickers }) => {
	return (
		<AddButton onClick={() => addTickers()} type="button">
			Add Tickers
		</AddButton>
	);
};
