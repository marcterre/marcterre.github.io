import { ChangeEvent } from "react";

type TextInputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  variant?: string;
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = (props: TextInputProps) => {
  const { label, type, placeholder, variant, handleChange } = props;
  return (
    <div className={`input-wrapper input-wrapper--${variant}`}>
      <label>{label && label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`input input--${variant}`}
        onChange={handleChange}
      ></input>
    </div>
  );
};

export default TextInput;
