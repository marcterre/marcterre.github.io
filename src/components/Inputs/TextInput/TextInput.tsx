import React from "react";

type TextInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  variant?: string;
};

export const TextInput = (props: TextInputProps) => {
  const { label, type, placeholder, variant } = props;
  return (
    <div className={`input-wrapper input-wrapper--${variant}`}>
      <label>{label && label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input--${variant}`}
      ></input>
    </div>
  );
};

export default TextInput;
