import Note from "../models/noteModel.js";

// Path             --> http://localhost:9000/api/note
// Description      --> Read a note
const getNote = async(req, res) => {
  const {id} = req.params;
  const note = await Note.findOne({_id: id});
  res.json(note);
};


// Path             --> http://localhost:9000/api/note
// Description      --> Read a note
const getNotes = async(req, res) => {
  const notes = await Note.find()
  res.json(notes);
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
const updateNote = async(req, res) => {
  const {id} = req.params;
  const note = await Note.findByIdAndUpdate(id, req.body, {new: true});
  res.json(note);
};

// Path             --> http://localhost:9000/api/note
// Description      --> Delete a note
const deleteNote = async(req, res) => {
  const { id } = req.params;
  // const note = await Note.findByIdAndDelete(id)
  const note = await Note.deleteOne({_id: id})
  res.json(note);
};

export { getNotes,getNote, createNote, updateNote, deleteNote };
