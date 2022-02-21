import { List, ListItem, TickerEl, TickerName } from "./TickersList.Styled";
import { useSelector } from "react-redux";
import { RemoveButton } from "./RemoveButton";

export const TickersList = ({ ind }) => {
	const { items } = useSelector(({ tickers }) => tickers);

	return (
		<div>
			<List>
				{items.length > 0
					? items.map((item, ind) => {
							const { ticker, price, change, change_percent, dividend } = item;
							const changePrice = (price - change).toFixed(2);

							return (
								<ListItem key={ind} elevation={1}>
									<TickerEl>
										exchange index:
										<TickerName>{ticker}</TickerName>
									</TickerEl>
									<TickerEl>price: {price} $</TickerEl>
									{changePrice > 0 ? (
										<span style={{ color: "green" }}>{changePrice} $ 🡅</span>
									) : (
										<span style={{ color: "red" }}>{changePrice} $ 🡇</span>
									)}
									<span>{change_percent}%</span>
									<span>{dividend}$</span>
									<RemoveButton ind={ind} />
								</ListItem>
							);
					  })
					: "Loading..."}
			</List>
		</div>
	);
};
