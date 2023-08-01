import { Button } from "../../../Button";
import { TextInput } from "../../../Inputs";
import { Form } from "../../../Form";
import { useState } from "react";
import { createProject } from "../../../../helpers/db";

export const AddProjectForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const addNewProject = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const newProject = {
      name,
      description,
      image,
    };

    try {
      const createdProject = await createProject(newProject);
      console.log("New project created:", createdProject);
    } catch (error) {
      console.error("Error creating project:", error);
    }

    setName("");
    setDescription("");
    setImage("");
  };

  return (
    <Form variant="add-project" handleSubmit={addNewProject}>
      <>
        <TextInput
          label="Project Name"
          type="text"
          variant="add-project"
          handleChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Project Description"
          type="text"
          variant="add-project"
          handleChange={(e) => setDescription(e.target.value)}
        />
        <TextInput
          label="Project Image"
          type="file"
          variant="add-project"
          handleChange={(e) => setImage(e.target.value)}
        />
        <div className="form--add-project-button-wrapper">
          <Button label="Cancel" type="button" variant="add-project-cancel" />
          <Button label="Save" type="submit" variant="add-project-submit" />
        </div>
      </>
    </Form>
  );
};

export default AddProjectForm;
