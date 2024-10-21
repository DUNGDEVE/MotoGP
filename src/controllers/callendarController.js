const caModels = require('../models/calendarModels');

exports.getMotoGPCalendar = async (req, res) => {
    try {
        const results = await caModels.getAllMotoGPCalendar();
        // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching ca' + err }); // Xử lý lỗi khi xảy ra
    }
};