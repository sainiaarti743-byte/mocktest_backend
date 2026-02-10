
const router = require('express').Router();

const {createPDF , getPDFs} = require('../controllers/pdf.controller');


router.post('/pdfcreate',createPDF);
router.get('/pdflist',getPDFs);


module.exports = router;