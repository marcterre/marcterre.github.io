import "./Button.styles.scss";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  label?: string;
  variant?: string;
  handleClick?: () => void;
};

export const Button = (props: ButtonProps) => {
  const { type, label, variant, handleClick } = props;
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={handleClick}
    >
      {label && label}
    </button>
  );
};

export default Button;
