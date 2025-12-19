import Client from "../models/Client.js";

export const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Client image is required" });
    }

    const client = new Client({
      name,
      description,
      designation,
      image: req.file.path
    });

    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ message: "Failed to add client" });
  }
};

export const getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch clients" });
  }
};
