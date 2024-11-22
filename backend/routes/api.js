const express = require('express');
const { processInput } = require('../controller/apiController');
const router = express.Router();

router.post('/',  async (req, res) => {
    try {
        const { data , file_b64} = req.body;

        if (!data) {
            return res.status(400).json({ is_success: false, message: 'Data is required.' });
        }
        
        const response = processInput(data, file_b64);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ is_success: false, message: 'Internal Server Error.' });
    }
});


router.get('/', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

module.exports = router;
