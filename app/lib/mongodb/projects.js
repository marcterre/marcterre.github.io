import clientPromise from ".";

let client;
let db;
let projects;

const init = async () => {
  try {
    client = await clientPromise;
    db = client.db("Portfolio");
    projects = db.collection("Projects");
  } catch (error) {
    console.error("Error in init:", error);
    throw error; // Rethrow the error to indicate initialization failure
  }
};

const initializeDatabase = async () => {
  if (!projects) {
    try {
      await init();
    } catch (error) {
      console.error("Database initialization failed:", error);
    }
  }
};

const getAllProjects = async () => {
  await initializeDatabase();

  try {
    if (!projects) {
      throw new Error("Projects collection is not initialized");
    }

    const result = await projects
      .find({})
      .map((project) => ({ ...project, _id: project._id.toString() }))
      .toArray();
    return { projects: result };
  } catch (error) {
    console.error("Error in getAllProjects:", error);
    return { text: "error in getAllProjects", error: error.message };
  }
};

export { getAllProjects };
