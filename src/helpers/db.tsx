import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";
import "dotenv/config";

const URI = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@db-portfolio.abirw8w.mongodb.net/?retryWrites=true&w=majority`;

const projectSchema = new Schema({
  id: String,
  name: String,
  description: String,
  image: String,
});

const Project = models.Project || model("Project", projectSchema);

async function connectDatabase() {
  try {
    await mongoose.connect(URI);
    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

connectDatabase()
  .then(async () => {
    const result = await Project.find();
    console.log(result);
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB Atlas:", error);
  });

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

  await Project.updateOne({ _id: id }, { $set: { project } });

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
