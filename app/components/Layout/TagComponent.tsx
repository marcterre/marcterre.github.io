const TagComponent = function ({ label }: { label: string }) {
  return (
    <li className="rounded bg-sky-900/50 text-white py-0.5 px-1.5 text-[0.8rem] shadow shadow-black/30">
      {label}
    </li>
  );
};

export default TagComponent;
