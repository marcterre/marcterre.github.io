import "./Button.styles.scss";
import { ReactElement } from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  label?: string | ReactElement;
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
      {typeof label === "string" ? (
        <span>{label}</span>
      ) : typeof label === "function" ? (
        <label />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
