import "./GridContainer.styles.scss";

type GridContainerType = {
  children?: React.ReactNode;
  variant?: string;
};

export const GridContainer = (props: GridContainerType) => {
  const { children, variant } = props;

  const style = {
    display: "grid",
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
