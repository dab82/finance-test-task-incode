import styled from "styled-components";

export const List = styled.ul`
	margin: 0 auto;
	padding: 20px;
	max-width: 100%;
	font-size: medium;
`;

export const ListItem = styled.li`
	/* display: grid;
	grid-gap: 5px;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
	max-width: 90%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 0 15px;
	margin: 5px;
	max-width: 100%;
	font-size: medium;
	border-bottom: 2px solid gray;
	background-color: #ffffff;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.22), 0px 2px 2px rgba(0, 0, 0, 0.24),
		0px 2px 1px rgba(0, 0, 0, 0.32);
`;

export const TickerEl = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 5px;
`;

export const TickerName = styled.p`
	font-weight: bold;
	background-color: #a3edf0;
	margin-left: 5px;
	padding: 5px;
`;

export const Del = styled.button`
	padding: 5px;
	border-radius: 20%;
	transition: all 250ms ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
	}
`;
