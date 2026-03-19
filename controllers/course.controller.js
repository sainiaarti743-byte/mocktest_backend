
const Course = require('../models/course.model');
const Category = require('../models/category.model');


exports.createCategories = async(req,res)=>{
  try{
    const categories = await Category.create(req.body);
    res.json(categories);

  }catch(error){
    res.status(500).json({error:false,message:error.message});
  }
}


exports.getCategories = async(req,res)=>{
    try{
        const categories = await Category.find();
        res.json({success:true,data:categories})
    }catch(error){
        res.status(500).json({success:false,message:error.message});
    }
};



exports.getCourses = async (req, res) => {
  try {
    const { category } = req.query;

    let filter = {};

    if (category && category !== "All") {
      filter.category = category;
    }

    const courses = await Course.find(filter);

    res.json({ success: true, data: courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};