import "./Form.styles.scss";
import { ReactElement } from "react";
import { FormEvent } from "react";

type FormProps = {
  children?: ReactElement;
  handleSubmit?: (e: FormEvent) => void;
  variant?: string;
};

export const Form = (props: FormProps) => {
  const { children, handleSubmit, variant } = props;
  return (
    <form onSubmit={handleSubmit} className={`form form--${variant}`}>
      {children}
    </form>
  );
};

export default Form;
