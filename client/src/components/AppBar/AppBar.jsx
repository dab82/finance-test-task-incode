import { CurrentTime, AppBarHeader } from "./AppBar.Slyled";
import { ChangeInterval } from "./ChangeInterval";

export const AppBar = () => {
	const currentTime = new Date().toLocaleDateString();

	return (
		<AppBarHeader>
			<CurrentTime>Quote data for {currentTime}</CurrentTime>
			<ChangeInterval />
		</AppBarHeader>
	);
};
