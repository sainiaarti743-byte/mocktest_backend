
const router = require('express').Router();
const { createMockTest
    , getMockTests,
    getSingleMockTest,
    updateMockTest,
    deleteMockTest

} = require('../controllers/mocktest.controller');
const {verifyToken} = require('../middlewares/auth');

router.post('/create',verifyToken, createMockTest);
router.get('/Mocklist',verifyToken, getMockTests);
router.get('/:id',verifyToken, getSingleMockTest);
router.put('/update/:id',verifyToken, updateMockTest);
router.delete('/delete/:id',verifyToken, deleteMockTest);


module.exports = router;



