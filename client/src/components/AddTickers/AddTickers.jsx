import { useState } from "react";
import { useSelector } from "react-redux";
import { AddTickersButton } from "../AddTickers/AddTickersButton";
import { TickersArray } from "./AddTickersArray";
import { Div } from "./AddTickers.Styled";

export const AddTickersList = () => {
	const { items } = useSelector(({ tickers }) => tickers);
	const [toggle, setToggle] = useState(false);

	const addTickers = () => {
		setToggle(!toggle);
	};

	const visible = items.length < 6;

	return (
		<Div>
			{visible && <AddTickersButton addTickers={addTickers} />}
			{toggle && <TickersArray key={"id"} />}
		</Div>
	);
};
