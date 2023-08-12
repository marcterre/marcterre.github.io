import "./StyledBox.styles.scss";

type StyledBoxType = {
  subContent?: string;
  title?: string;
  description?: string;
};

export const StyledBox = (props: StyledBoxType) => {
  const { title, subContent, description } = props;
  const arrayLength = 16;
  return (
    <div className="box">
      <div className="box-middle">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="box-container">
        <div className="box-container-left">
          <p className="box-container-left-content">{subContent}</p>
        </div>
        <div className="box-container-right">
          {Array.from({ length: arrayLength }).map((_, index) => {
            const boxWidth = 100 / arrayLength;
            const opacity = 1 - index * (1 / arrayLength);

            const boxStyle = {
              width: `calc(${boxWidth}% - ${index}px)`,
              opacity: opacity,
            };

            return (
              <div
                key={index}
                className="box-container-right-elements"
                style={boxStyle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StyledBox;
