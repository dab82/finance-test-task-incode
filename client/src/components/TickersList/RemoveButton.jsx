import React from "react";
import { useDispatch } from "react-redux";
import { deleteTickers } from "../../redux/actionsTickers";
import { socket } from "../../connection/Socket";
import { Del } from "./TickersList.Styled";

export const RemoveButton = ({ ind }) => {
	const dispath = useDispatch();

	const deleteTikers = (index) => {
		socket.emit("removeTicker", index);
		dispath(deleteTickers(index));
	};

	return (
		<Del onClick={() => deleteTikers(ind)} type="button" aria-label="delete">
			✖️
		</Del>
	);
};
