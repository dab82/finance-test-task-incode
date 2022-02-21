import { useState } from "react";
import { socket } from "../../connection/Socket";
import { Form, InputInterval, ChangeBtn } from "./AppBar.Slyled";
export const ChangeInterval = () => {
	const [interval, setInterval] = useState(5000);

	const submitInterval = (event) => {
		setInterval(event.target.value);
	};

	const changeInterval = () => {
		console.log("submitInterval");
		socket.emit("fetchInterval", Number(interval));
	};

	return (
		<Form>
			<InputInterval
				onChange={(event) => submitInterval(event)}
				type="number"
				min="5000"
				max="60000"
				step="1000"
				placeholder="Time interval, ms"
				aria-describedby="button-addon2"
			></InputInterval>
			<ChangeBtn onClick={changeInterval} type="button" id="button-addon2">
				Change
			</ChangeBtn>
		</Form>
	);
};
