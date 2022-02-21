import styled from "styled-components";

export const AppBarHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	background-color: #bec6c7;
`;
export const CurrentTime = styled.p`
	font-size: 30px;
`;

export const Form = styled.form`
	padding: 10px;
`;

export const ChangeBtn = styled.button`
	padding: 5px;
	border-radius: 5px;
	transition: all 250ms ease-in-out;

	&:hover {
		transform: scale(1.05);
		box-shadow: inset 1px 1px 2px white, inset -1px -1px 2px black;
	}
`;

export const InputInterval = styled.input`
	padding: 5px;
	margin-right: 5px;
	width: 60%;
	border-radius: 5px;
`;
