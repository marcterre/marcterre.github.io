import React, { ReactElement } from "react";
import { FormEvent } from "react";

type FormProps = {
  children?: ReactElement;
  handleSubmit?: (e: FormEvent) => void;
};

export const Form = (props: FormProps) => {
  const { children, handleSubmit } = props;
  return <form onSubmit={handleSubmit}>{children}</form>;
};

export default Form;
