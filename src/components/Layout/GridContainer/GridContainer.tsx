import "./GridContainer.styles.scss";

type GridContainerType = {
	columns?: number;
	rows?: number;
	children?: React.ReactNode;
	variant?: string;
};

export const GridContainer = (props: GridContainerType) => {
	const { columns, rows, children, variant } = props;

	const style = {
		display: "grid",
		gridTemplateColumns: `repeat(${columns}, 1fr)`,
		gridTemplateRows: `repeat(${rows}, 1fr)`,
	};

	return (
		<div
			className={`grid-container grid-container--${variant ? variant : ""}`}
			style={style}
		>
			{children}
		</div>
	);
};

export default GridContainer;
