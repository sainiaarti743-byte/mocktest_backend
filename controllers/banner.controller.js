
const Banner = require('../models/banner.model')

exports.getBanners = async (req, res) => {
    try {
        const banners = await Banner.find();
        res.json(banners)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};
exports.addBanner = async(req,res)=>{
    try{
        const {title,image} = req.body;
        const banner = new Banner({
            title,image
        });
        await banner.save();
        res.status(201).json(banner);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}


// UPDATE BANNER
exports.updateBanner = async (req, res) => {

    try {

        const banner = await Banner.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(banner);

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};


// DELETE BANNER
exports.deleteBanner = async (req, res) => {

    try {

        await Banner.findByIdAndDelete(req.params.id);

        res.json({ message: "Banner deleted successfully" });

    } catch (error) {

        res.status(500).json({ message: error.message });

    }
};