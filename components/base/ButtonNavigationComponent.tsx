interface ButtonNavigationComponentProps {
  elements: {
    name: string;
    icon: JSX.Element;
    handleClick?: () => void;
  }[];
}

const ButtonNavigationComponent = ({
  elements,
}: ButtonNavigationComponentProps) => {
  return (
    <div className="flex">
      {elements.map((element, index) => {
        const { icon, handleClick } = element;
        return (
          <button
            type="button"
            key={index}
            className="w-8 h-8 hover:bg-violet-400/30 border-violet-600/50 rounded-sm active:relative active:top-0.5 border shadow-sm shadow-violet-200 flex items-center justify-center"
            onClick={handleClick}
          >
            {icon}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonNavigationComponent;
