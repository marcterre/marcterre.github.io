import React, { ReactElement } from "react";

type FormProps = {
  children?: ReactElement;
};

export const Form = (props: FormProps) => {
  const { children } = props;
  return <form>{children}</form>;
};

export default Form;
