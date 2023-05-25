import express from "express";

const router = express.Router()


// Path             --> http://localhost:9000/api/note
// Description      --> Read a note
router.get('/', (req, res) => {
    res.json({message: "Read a Note"})
})

// Path             --> http://localhost:9000/api/note
// Description      --> Create a note
router.post('/', (req, res) => {
    res.json({message: "Create a Note"})
})

// Path             --> http://localhost:9000/api/note
// Description      --> Update a note
router.put('/:id', (req, res) => {
    res.json({message: "Create a Note"})
})

// Path             --> http://localhost:9000/api/note
// Description      --> Delete a note
router.delete('/:id', (req, res) => {
    res.json({message: "Delete a Note"})
})

export default router