import Note from "../models/noteModel.js";


// Path             --> http://localhost:9000/api/note
// Description      --> Read a note
const getNotes = (req, res) => {
  res.json({ message: "Read a Note" });
};

// Method           --> POST
// Path             --> http://localhost:9000/api/note
// Description      --> Create a note
const createNote = async(req, res) => {
    console.log(req.body);

    const note = await Note.create(req.body);
  res.json(note);
};

// Path             --> http://localhost:9000/api/note
// Description      --> Update a note
const updateNote = (req, res) => {
  res.json({ message: "Create a Note" });
};

// Path             --> http://localhost:9000/api/note
// Description      --> Delete a note
const deleteNote = (req, res) => {
  res.json({ message: "Delete a Note" });
};

export { getNotes, createNote, updateNote, deleteNote };
