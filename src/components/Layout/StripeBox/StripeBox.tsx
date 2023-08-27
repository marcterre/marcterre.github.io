import "./StripeBox.styles.scss";

type StripeBoxType = {
  subContent?: string;
  description?: string;
  children?: React.ReactNode;
};

export const StripeBox = (props: StripeBoxType) => {
  const { subContent, description, children } = props;
  const arrayLength = 13;
  return (
    <div className="box">
      {children}
      <div className="box-middle">
        <p className="box-middle-description">{description}</p>
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

export default StripeBox;
