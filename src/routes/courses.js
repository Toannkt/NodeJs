const express = require('express');
const router = express.Router();

const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.get('/:id/edit', CourseController.edit);
router.put('/:id', CourseController.update);
router.delete('/:id', CourseController.delete);
router.post('/store', CourseController.store);
router.get('/:slug', CourseController.show);

module.exports = router;