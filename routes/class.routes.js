
const router = require('express').Router();

const {createClass ,getClasses,updateClass,deleteClass} = require('../controllers/class.controller');

router.post('/create',createClass);
router.get('/classlist',getClasses);
router.put('/classupdate',updateClass);
router.delete('/classdelete',deleteClass)

module.exports = router;



