import React from "react";

type ButtonProps = {
  type?: "button" | "submit" | "reset" | undefined;
  label?: string;
  variant?: string;
};

export const Button = (props: ButtonProps) => {
  const { type, label, variant } = props;
  return (
    <button className={`button button--${variant}`} type={type}>
      {label && label}
    </button>
  );
};

export default Button;
