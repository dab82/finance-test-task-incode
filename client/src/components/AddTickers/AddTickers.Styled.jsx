import styled from "styled-components";

export const Label = styled.label`
	margin: 10px;
	padding: 10px;
	max-width: 100%;
	font-size: medium;
`;

export const Input = styled.input`
	margin-right: 5px;
	padding: 10px;
	max-width: 100%;
	font-size: medium;
`;

export const AddButton = styled.button`
	margin: 10px auto;
	padding: 10px;
	border-radius: 10px;
	transition: all 250ms ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
	}
`;

export const Div = styled.div`
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
