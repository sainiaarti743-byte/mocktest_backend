
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


module.exports = router;




