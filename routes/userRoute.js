
// const express = require('express');
// const router = express.Router();
// const {createUser ,getUsers,updateUser,deleteUser} = require('../controllers/userController');

// router.post('/create',createUser);
// router.get('/userlist',getUsers);
// router.put('/userupdate',updateUser);
// router.delete('/userdelete',deleteUser)


// module.exports = router;

const express = require('express');
const router = express.Router();
const {adminLogin} = require('../controllers/userController');

router.post('/admin/login',adminLogin);




router.get('/create-admin', async (req, res) => {
  const bcrypt = require('bcryptjs');
  const User = require('../models/user');

  const hash = await bcrypt.hash("admin123", 10);

  const admin = await User.create({
    name: "Super Admin",
    email: "admin@gmail.com",
    password: hash,
    role: "admin"
  });

  res.json(admin);
});


module.exports = router;





