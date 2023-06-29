import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.pjgtprn.mongodb.net/?retryWrites=true&w=majority`;

const projectSchema = new Schema({
  id: String,
  name: String,
  description: String,
  image: String,
});

const Project = models.Project || model("Project", projectSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllProjects() {
  await connectDatabase();

  const projects = await Project.find({});
  return projects;
}

async function getProject(id: string) {
  await connectDatabase();

  const project = await Project.findOne({
    id,
  });
  return project;
}

async function createProject(project: string[]) {
  await connectDatabase();

  const createdProject = await Project.create({
    ...project,
    id: crypto.randomUUID(),
  });

  return createdProject;
}

async function updateProject(id: string, project: string) {
  await connectDatabase();

  await Project.updateOne(
    {
      id,
    },
    project
  );

  const updatedProject = getProject(id);

  return updatedProject;
}

async function deleteProject(id: string) {
  await connectDatabase();

  const deletedProject = getProject(id);
  await Project.deleteOne({
    id,
  });
  return deletedProject;
}

export {
  getAllProjects,
  getProject,
  createProject,
  updateProject,
  deleteProject,
};
