const express = require('express')
const router = express.Router();
const getMeData = require('../controllers/datafunc');
const postData = require('../controllers/postData')
const patchData = require('../controllers/patchData');
const deleteData = require('../controllers/deleteData');
router.route('/').get(getMeData);
router.route('/').post(postData);
router.route('/:_id').patch(patchData);
router.route('/:_id').delete(deleteData);
module.exports = router;