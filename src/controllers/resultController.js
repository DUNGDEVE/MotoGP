const resultModels = require('../models/resultModels'); // Đảm bảo import đúng

// Lấy danh sách tất cả tên sự kiện
exports.getEventNames = async (req, res) => {
    try {
        const events = await resultModels.getAllEventNames();
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event names' });
    }
};

// Lấy danh sách tất cả tên thể loại
exports.getCategories = async (req, res) => {
    try {
        const categories = await resultModels.getAllCategories();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories' });
    }
};

// Lấy danh sách tất cả tên session
exports.getSessions = async (req, res) => {
    try {
        const sessions = await resultModels.getAllSessions();
        res.json(sessions);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching sessions' });
    }
};

// Lọc kết quả theo năm, sự kiện, thể loại và session
exports.filterResults = async (req, res) => {
    const { event, category, session } = req.body;
    try {
        const results = await resultModels.filterResults(event, category, session);
        res.json(results);
    } catch (error) {
        res.status(500).json({ message: 'Error filtering results' });
    }
};