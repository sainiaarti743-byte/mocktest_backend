

const Notes = require('../models/notes.model');

exports.createNotes = async (req, res) => {
    const data = await Notes.create(req.body);
    res.json(data);
}


exports.getNotes = async (req, res) => {
    const data = await Notes.find();
    res.json(data);
}