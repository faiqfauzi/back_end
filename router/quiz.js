const router = require('express').Router();
const soalController = require('../controllers/quiz')

const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('image'), soalController.create);
router.post('/:id', upload.single('image'), soalController.update);
router.get('/', soalController.getAll)
router.get('/:id', soalController.findOne);
router.get('/category/:category', soalController.getByCategory);
router.delete('/:id', soalController.delete);

module.exports = router;