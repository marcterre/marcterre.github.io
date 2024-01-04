type ButtonComponentProps = {
  className?: string;
  label?: string;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  handleClick?: () => void;
};

const ButtonComponent = ({
  className,
  label,
  icon,
  type,
  handleClick,
}: ButtonComponentProps) => {
  return (
    <button
      type={type ? type : "button"}
      className={className ? className : ""}
      onClick={handleClick}
    >
      {label ? label : icon}
    </button>
  );
};

export default ButtonComponent;
