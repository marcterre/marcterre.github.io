import mongoose, { model, Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const mongoDbUser = process.env.REACT_APP_MONGO_DB_USER;
const mongoDbPassword = process.env.REACT_APP_MONGO_DB_PASSWORD;

const URI = `mongodb+srv://${mongoDbUser}:${mongoDbPassword}@db-portfolio.abirw8w.mongodb.net/?retryWrites=true&w=majority`;

console.log("URI", URI);
const projectSchema = new Schema({
  id: String,
  name: String,
  description: String,
  image: String,
});

const Project = model("Project", projectSchema);

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
    const result = await Project.find().exec();
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

async function createProject(project: {
  name: string;
  description: string;
  image: string;
}) {
  await connectDatabase();

  const createdProject = await Project.create({
    ...project,
    id: uuidv4(),
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
