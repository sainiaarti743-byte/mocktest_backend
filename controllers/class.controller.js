const OnlineClass = require('../models/class.model');

exports.createClass = async (req, res) => {
    const data = await OnlineClass.create(req.body);
    res.json(data);
};

exports.getClasses = async (req, res) => {
    const data = await OnlineClass.find();
    res.json(data);
};

exports.updateClass = async (req, res) => {
    const data = await Class.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }

    )
    res.json(data);
}


exports.deleteClass = async (req, res) => {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: "Class deleted" });
};
