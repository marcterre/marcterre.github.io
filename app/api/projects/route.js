import { getAllProjects } from "../../lib/mongodb/projects";

export async function GET(req, res) {
  try {
    const { projects, error } = await getAllProjects();
    if (error) {
      throw new Error(error);
    }

    return Response.json({ text: "projects", projects });
  } catch (error) {
    return Response.json({ error: error.message, status: 500 });
  }
}
