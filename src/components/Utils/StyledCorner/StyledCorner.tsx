import "./StyledCorner.styles.scss";

export const StyledCorner = () => {
	const divVariant = ["overlay", "inner", "inner2"];

	const verticalWidth = 90;
	const positionTop = 2;

	return (
		<>
			{divVariant.map((item, index) => {
				const verticalStyle: React.CSSProperties = {
					position: "absolute",
					top: `${positionTop + 0.5 * index}rem`,
					width: `${verticalWidth - 2 * index}vw`,
					height: "2px",
				};

				return (
					<div key={item} className="corner-overlay">
						<div style={verticalStyle} className="vertical" />
					</div>
				);
			})}
		</>
	);
};
export default StyledCorner;
