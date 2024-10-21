const express = require('express');
const router = express.Router();
const pool = require('../config/database'); // Import kết nối database của bạn

// Route để lấy dữ liệu từ database
router.get('/getData', (req, res) => {
    pool.query('SELECT * FROM teams', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database query failed' });
        }
        res.json(results); // Trả dữ liệu về client dưới dạng JSON
    });
});

module.exports = router;
