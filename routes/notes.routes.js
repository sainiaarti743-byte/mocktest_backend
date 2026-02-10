

const router = require('express').Router();

const { createNotes, getNotes } = require('../controllers/notes.controller');

router.post('/create', createNotes);
router.get('/noteslist', getNotes);

module.exports = router;