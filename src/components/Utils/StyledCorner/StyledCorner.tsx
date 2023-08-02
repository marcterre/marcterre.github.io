import { StyledDiv } from "../../Layout";

export const StyledCorner = () => {
	const divVariant = ["overlay", "inner", "inner2"];

	const verticalWidth = 70;
	const positionTop = 2;
	const positionRight = 2;

	return (
		<>
			{divVariant.map((item, index) => {
				const verticalStyle: React.CSSProperties = {
					position: "absolute",
					right: `${positionRight + 0.5 * index}rem`,
					top: `${positionTop + 0.5 * index}rem`,
					backgroundColor: "black",
					width: `${verticalWidth - 5 * index}vw`,
					height: "2px",
				};
				const horizontalStyle: React.CSSProperties = {
					position: "absolute",
					right: `${positionRight + 0.5 * index}rem`,
					top: `${positionTop + 0.5 * index}rem`,
					backgroundColor: "black",
					width: "2px",
					height: `${verticalWidth - 5 * index}vw`,
				};

				return (
					<StyledDiv key={item}>
						<StyledDiv style={verticalStyle} />
						<StyledDiv style={horizontalStyle} />
					</StyledDiv>
				);
			})}
		</>
	);
};
export default StyledCorner;
