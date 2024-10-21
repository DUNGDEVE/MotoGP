const teamModels = require('../models/teamModels');

exports.getTeam = async (req, res) => {
    try {
        const results = await teamModels.getAllTeam(); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.addTeam = async (req, res) => {
    try {
        const results = await teamModels.addTeam(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.updateTeam = async (req, res) => {
    try {
        const results = await teamModels.updateTeam(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.deleteTeam = async (req, res) => {
    try {
        const results = await teamModels.deleteTeam(req.body); // Đợi kết quả từ teamModels
        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: 'Error fetching teams' }); // Xử lý lỗi khi xảy ra
    }
};

exports.getTeamDetails = async (req, res) => {
    const teamId = parseInt(req.params.team_id); // Chuyển đổi thành số
    console.log(`Received teamId: ${teamId}`); // Log teamId nhận được

    try {
        const team = await teamModels.getTeamByID(teamId); // Gọi hàm lấy thông tin đội theo team_id

        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }

        res.json(team); // Trả về thông tin của đội
    } catch (error) {
        console.error('Lỗi khi lấy chi tiết đội:', error);
        res.status(500).json({ message: 'Server error' });
    }
};



