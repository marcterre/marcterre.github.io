import "./StyledSign.styles.scss";

type StyledSignProps = {
  content: string;
};

export const StyledSign = (props: StyledSignProps) => {
  const { content } = props;
  return (
    <div className="sign">
      <div className="sign-content">{content}</div>
    </div>
  );
};

export default StyledSign;
