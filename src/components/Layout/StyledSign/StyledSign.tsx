import "./StyledSign.styles.scss";

type StyledSignProps = {
  content: string;
};

export const StyledSign = (props: StyledSignProps) => {
  const { content } = props;
  return (
    <div className="sign">
      <div className="sign-wrapper">
        <div className="sign-stroke-left" />
        <div className="sign-content" title={content}>
          {content}
        </div>
        <div className="sign-stroke-right" />
      </div>
    </div>
  );
};

export default StyledSign;
