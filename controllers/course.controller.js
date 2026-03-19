const Course = require('../models/course.model');
const Category = require('../models/category.model');


exports.createCategories = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Category name is required"
      });
    }

    
    const exists = await Category.findOne({ name });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Category already exists"
      });
    }

    const category = await Category.create({ name });

    res.status(201).json({
      success: true,
      data: category
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
exports.getCategories = async (req, res) => {
  try {
    const categories = (await Category.find()).toSorted({ name: 1 });
    res.json({
      success: true,
      data: categories
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
exports.getCourses = async(req,res)=>{
  try{
    const {category} = req.query;
    let filter = {};
    if(category && category !== "All"){
      filter.category = {$regex: `^${category}$`,$options:'i'}
    }
    const courses = await Course.find(filter).sort({createdAt:-1});
    res.json({success:true,
      count:courses.length,
      data:courses
    });
  }catch(error){
    res.status(500).json({
      success:false,
      message:error.message
    });
  }
};

