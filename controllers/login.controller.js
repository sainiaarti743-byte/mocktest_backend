
const Login = require('../models/login.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await Login.findOne({ email });
        if (exist) return res.status(400).json({ message: "User already exists" });

        const hash = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hash
        });

        res.json({ message: "Registered successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await user.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ message: 'Wrong Password' })

        const token = jwt.sign(
            { id: user._id, role: user.role },
            "MY_SECRET_KEY",
            { expiresIn: "7d" }
        );
        res.json({
            message: 'Login Successfully',
            token,
            user
        });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
};





