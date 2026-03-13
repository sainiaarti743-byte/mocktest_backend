
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.adminLogin = async (req,res)=>{
  const {email,password} = req.body;

  const user = await User.findOne({email, role:'admin'});
  if(!user) return res.status(404).json({message:"Admin not found"});

  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) return res.status(401).json({message:"Wrong password"});

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn:'1d' }
  );

  res.json({
    message:"Login success",
    token,
    admin:{
      id:user._id,
      name:user.name,
      email:user.email
    }
  });
};


