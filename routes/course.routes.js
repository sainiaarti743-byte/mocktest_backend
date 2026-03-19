
const express = require('express');
const router = express.Router();
const {
  getCategories,
  getCourses,
createCategories 

} = require('../controllers/course.controller');



router.post('/addcategories',createCategories);
router.get('/categories',getCategories);
router.get('/courses',getCourses);

module.exports = router;


