
const router = require('express').Router();
const { createMockTest
    , getMockTests,
    getSingleMockTest,
    updateMockTest,
    deleteMockTest

} = require('../controllers/mocktest.controller');

router.post('/create', createMockTest);
router.get('/Mocklist', getMockTests);
router.get('/:id', getSingleMockTest);
router.put('/:id', updateMockTest);
router.delete('/:id', deleteMockTest);


module.exports = router;

