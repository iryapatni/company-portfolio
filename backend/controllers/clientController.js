import Client from "../models/Client.js";

export const addClient = async (req, res) => {
  try {
    const { name, designation, description, image } = req.body;

    if (!name || !designation || !description || !image) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const client = new Client({
      name,
      designation,
      description,
      image
    });

    await client.save();
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
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
