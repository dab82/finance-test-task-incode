import React from "react";
import { Label, Input } from "./AddTickers.Styled";

export const TickersCheckBox = ({ ticker, ind, addTickers }) => {
	return (
		<Label>
			<Input onClick={() => addTickers(ind)} type="checkbox" value=""></Input>
			{ticker}
		</Label>
	);
};
