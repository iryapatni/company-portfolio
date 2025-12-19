import Project from "../models/Project.js";

export const addProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Project image is required" });
    }

    const project = new Project({
      name,
      description,
      image: req.file.path
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: "Failed to add project" });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects" });
  }
};
