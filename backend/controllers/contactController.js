import Contact from "../models/Contact.js";

// Submit contact form
export const submitContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // basic validation (human-written, not overdone)
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const contact = new Contact({
      name,
      email,
      message
    });

    await contact.save();

    return res.status(201).json({
      message: "Contact submitted successfully"
    });
  } catch (error) {
    console.error("Contact submit error:", error);
    return res.status(500).json({
      message: "Failed to submit contact form"
    });
  }
};

// Get all contact messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json(contacts);
  } catch (error) {
    console.error("Get contacts error:", error);
    return res.status(500).json({
      message: "Failed to fetch contact messages"
    });
  }
};
