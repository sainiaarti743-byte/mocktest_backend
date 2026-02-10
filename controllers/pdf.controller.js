const Pdf = require('../models/pdf.model')

exports.createPDF = async (req, res) => {

    const data = await Pdf.create(req.body);
    res.json(data);
};

exports.getPDFs = async (req, res) => {
    const data = await Pdf.find();
    res.json(data);
}