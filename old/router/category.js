const router = require('express').Router();
const categoryController = require('../controllers/category')

router.post('/', categoryController.create);
router.get('/', categoryController.getAll);
router.delete('/:id', categoryController.delete);
router.get('/:id', categoryController.findOne);
router.put('/:id', categoryController.update);

module.exports = router