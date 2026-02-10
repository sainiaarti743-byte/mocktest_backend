
const User = require('../models/user');

exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.json({
            message: "User created",
            user
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

exports.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}


