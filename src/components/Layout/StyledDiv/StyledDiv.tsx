import { CSSProperties } from "react";
import "./StyledDiv.styles.scss";

type StyledDivType = {
	variant?: string;
	children?: React.ReactNode;
	style?: CSSProperties;
};

export const StyledDiv = (props: StyledDivType) => {
	const { variant, children, style } = props;
	return (
		<div className={variant} style={style}>
			{children}
		</div>
	);
};

export default StyledDiv;
