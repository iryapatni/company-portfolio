import Client from "../models/Client.js";
import cloudinary from "../config/cloudinary.js";

export const addClient = async (req, res) => {
  try {
    const { name, description, designation } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "Client image is required" });
    }

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`,
      { folder: "company-portfolio" }
    );

    const client = new Client({
      name,
      description,
      designation,
      image: result.secure_url,
    });

    await client.save();
    res.status(201).json(client);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to add client" });
  }
};
