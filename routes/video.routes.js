const router = require('express').Router();

const {createVideo , getVideos,getSingleVideo,updateVideo,deleteVideo} = require('../controllers/video.controller');

router.post('/create',createVideo);
router.get('/videolist',getVideos);
router.get('/singlevideo',getSingleVideo),
router.put('/update',updateVideo),
router.delete('/videodelete',deleteVideo)



module.exports = router;