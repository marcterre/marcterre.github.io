import "./GridContainer.styles.scss";

type GridContainerType = {
  columns?: number;
  rows?: number;
  children?: React.ReactNode;
};

export const GridContainer = (props: GridContainerType) => {
  const { columns, rows, children } = props;

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div className="grid-container" style={style}>
      {children}
    </div>
  );
};

export default GridContainer;
