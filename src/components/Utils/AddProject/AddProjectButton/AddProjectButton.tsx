import { Button } from "../../../Button";
import { IoAddCircleOutline } from "react-icons/io5";

type AddProjectButtonProps = {
  handleClick?: () => void;
};

export const AddProjectButton = (props: AddProjectButtonProps) => {
  const { handleClick } = props;
  return (
    <Button
      label={<IoAddCircleOutline size="40px" />}
      handleClick={handleClick}
      variant="add-project"
    />
  );
};

export default AddProjectButton;
