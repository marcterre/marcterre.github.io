import React from "react";

const TagComponent = function ({ label }: { label: string }) {
  return (
    <ul className="w-fit h-fit">
      <li className="text-slate-100 bg-purple-600/30 rounded py-0.5 px-1.5 text-[0.8rem]">
        {label}
      </li>
    </ul>
  );
};

export default TagComponent;
