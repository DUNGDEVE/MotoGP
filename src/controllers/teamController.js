const teamModels = require('../models/teamModels');

exports.getMotoGPTeam = async (req, res) => {
    try {
        const results = await teamModels.getAllMotoGPTeam(); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};


