import { Button } from "../../../Inputs";
import { IoAddCircleOutline } from "react-icons/io5";

type AddProjectButtonProps = {
  handleClick?: () => void;
};

export const ProjectFormButton = (props: AddProjectButtonProps) => {
  const { handleClick } = props;
  return (
    <Button
      label={<IoAddCircleOutline size="40px" />}
      handleClick={handleClick}
      variant="add-project"
    />
  );
};

export default ProjectFormButton;
