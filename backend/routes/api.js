const express = require('express');
const { processInput } = require('../controller/apiController');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });
router.post('/', upload.single('file'), async (req, res) => {
    try {
        const { data} = req.body;

        if (!data) {
            return res.status(400).json({ is_success: false, message: 'Data is required.' });
        }
        const file= req.file
      
        const response = processInput(data, file);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ is_success: false, message: 'Internal Server Error.' });
    }
});


router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
