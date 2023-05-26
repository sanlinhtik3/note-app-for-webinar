import mongoose from 'mongoose'

const noteSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Note = mongoose.model('Note', noteSchema)

export default Note