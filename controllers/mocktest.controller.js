
const MockTest = require('../models/mocktest.model');

exports.createMockTest = async (req, res) => {
    const test = await MockTest.create(req.body);
    res.json(test);
};

exports.getMockTests = async (req, res) => {
    try {
        const tests = await MockTest.find();
        res.json(tests);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

};


exports.getSingleMockTest = async (req, res) => {
    try {
        const test = await MockTest.findByID(req.params.id);
        res.json(test);
    } catch (err) {
        res.status(404).json({ error: 'Test not found' })
    }
};

exports.updateMockTest = async (req, res) => {
    try {
        const test = await MockTest.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ message: "Test updated", test });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


exports.deleteMockTest = async (req, res) => {
    try {
        await MockTest.findByIdAndDelete(req.params.id);
        res.json({ message: 'Test deleted' })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};


