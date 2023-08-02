import { StyledDiv } from "../../Layout";

export const StyledCorner = () => {
	const divVariant = [
		{
			name: "overlay",
			variantVertical: "styled-corner-vertical",
			variantHorizontal: "styled-corner-horizontal",
		},
		{
			name: "inner",
			variantVertical: "styled-corner-inner-vertical",
			variantHorizontal: "styled-corner-inner-horizontal",
		},
	];

	const verticalWidth = 70;
	const positionTop = 2;
	const positionRight = 2;

	// const style = {
	// 	position: "absolute" as const,
	// 	width: `${verticalWidth}vw`,
	// 	height: "2px",
	// 	left: `${positionLeft}rem`,
	// 	top: `${positionTop}rem`,
	// };

	return (
		<>
			{divVariant.map((item, index) => {
				const { name } = item;

				const verticalStyle: React.CSSProperties = {
					position: "absolute",
					right: `${positionRight + 0.5 * index}rem}`,
					top: `${positionTop + 0.5 * index}rem}`,
					// right: `${positionRight + 0.5 * index}rem`,
					// top: `${positionTop + 0.5 * index}rem`,
					backgroundColor: "black",
					width: `${verticalWidth - 5 * index}vw`,
					height: "2px",
				};
				const horizontalStyle: React.CSSProperties = {
					position: "absolute",
					right: `${positionRight + 0.5}rem}`,
					top: `${positionTop + 0.5}rem}`,
					backgroundColor: "black",
					width: "2px",
					height: `${verticalWidth - 5 * index}vw`,
				};

				return (
					<StyledDiv key={name}>
						<StyledDiv style={verticalStyle} />
						<StyledDiv style={horizontalStyle} />
					</StyledDiv>
				);
			})}

			{/* <StyledDiv variant="styled-corner">
				<StyledDiv variant="styled-corner-inner-vertical" />
				<StyledDiv variant="styled-corner-inner-horizontal" />
			</StyledDiv> */}
		</>
	);
};
export default StyledCorner;
