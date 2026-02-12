const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email, role: 'admin' });
        if (!user) return res.status(404).json({ message: "Admin not found" });



        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Wrong password" });
        }


        const token = jwt.sign(
            { id: user._id, role: user.role },
            "ADMIN_SECRET_KEY",
            { expiresIn: "1d" }
        );

        res.json({
            message: "Admin login success",
            token,
            admin: user
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};




