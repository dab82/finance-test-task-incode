import React, { useEffect } from "react";
import { socket } from "./connection/Socket";
import { useDispatch } from "react-redux";
import { setTickers } from "./redux/actionsTickers";
import { Container } from "./components/Container/Container";
import { AppBar } from "./components/AppBar/AppBar";
import { TickersList } from "./components/TickersList/TickersList";
import { AddTickersList } from "./components/AddTickers/AddTickers";

socket.emit("start");

export const App = () => {
	const dispath = useDispatch();

	useEffect(() => {
		socket.on("ticker", function (data) {
			dispath(setTickers(data));
		});
	});

	return (
		<Container>
			<AppBar />
			<TickersList />
			<AddTickersList />
		</Container>
	);
};
