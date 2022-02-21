import React from "react";
import { TickersCheckBox } from "./AddTickersInput";
import { socket } from "../../connection/Socket";
import { useDispatch } from "react-redux";
import { setTickers } from "../../redux/actionsTickers";

export const TickersArray = () => {
	const dispath = useDispatch();

	const tickers = [
		"AAPL", // Apple
		"GOOGL", // Alphabet
		"MSFT", // Microsoft
		"AMZN", // Amazon
		"FB", // Facebook
		"TSLA", // Tesla
	];

	const addTickers = (index) => {
		socket.emit("addTicker", tickers[index]);
		socket.on("ticker", function (data) {
			dispath(setTickers(data));
		});
	};

	return (
		<div>
			{tickers &&
				tickers.map((obj, ind) => (
					<TickersCheckBox
						key={obj.ticker}
						ticker={obj}
						ind={ind}
						addTickers={addTickers}
					/>
				))}
		</div>
	);
};
