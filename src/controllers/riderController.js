const riderModels = require('../models/riderModels');

/**
 * Lấy tất cả các tay đua.
 */
exports.getRider = async (req, res) => {
    try {
        const results = await riderModels.getAllRider();
        res.json(results);
    } catch (err) {
        console.error('Lỗi khi lấy tất cả tay đua:', err);
        res.status(500).json({ message: 'Error fetching riders' });
    }
};

exports.getAll = async (req, res) => {
    try {
        const results = await riderModels.getAll();
        res.json(results);
    } catch (err) {
        console.error('Lỗi khi lấy tất cả tay đua:', err);
        res.status(500).json({ message: 'Error fetching riders' });
    }
};

/**
 * Lấy thông tin chi tiết của một tay đua dựa trên rider_id.
 */
exports.getRiderDetails = async (req, res) => {
    const riderId = parseInt(req.params.rider_id); // Chuyển đổi thành số // Log riderId nhận được

    try {
        const rider = await riderModels.getRiderById(riderId);

        if (!rider) {
            return res.status(404).json({ message: 'Rider not found' });
        }

        res.json(rider);
    } catch (error) {
        console.error('Lỗi khi lấy chi tiết tay đua:', error);
        res.status(500).json({ message: 'Server error' });
    }
};


exports.addRider = async (req, res) => {
    try {
        const results = await riderModels.addRider(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.updateRider = async (req, res) => {
    try {
        const results = await riderModels.updateRider(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.deleteRider = async (req, res) => {
    try {
        const results = await riderModels.deleteRider(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};
