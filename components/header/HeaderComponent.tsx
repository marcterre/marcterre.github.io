import React from "react";
import LinkComponent from "./LinkComponent";

type HeaderComponentProps = {
  title: string;
};

const HeaderComponent = ({ title }: HeaderComponentProps) => {
  return (
    <div className="w-full grid gap-16">
      <LinkComponent />
      <h1 className="sm:text-5xl text-3xl text-bold text-white text-center">
        {title}
      </h1>
    </div>
  );
};

export default HeaderComponent;
