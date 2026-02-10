
const Video = require('../models/video.model');

exports.createVideo = async (req, res) => {
    try {
        const data = await Video.create(req.body);
        res.json({ message: "video added successfully", data })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }

};

exports.getVideos = async (req, res) => {
    try {
        const filter = {};
        if (req.query.type) {
            filter.type = req.query.type;
        }
        const data = await Video.find(filter);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};


exports.getSingleVideo = async (req, res) => {
    try {
        const data = await Video.findById(req.params.id)
        res.json(data);
    } catch {
        res.status(404).json({ error: 'video not found' })
    }
};


exports.updateVideo = async (req, res) => {
    try {
        const data = await Video.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.json({ message: 'video updated successfully', data })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.deleteVideo = async (req, res) => {
    try {
        await Video.findByIdAndDelete(req.params.id);
        res.json({ message: 'video deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


