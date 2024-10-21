const standingModels = require('../models/standingModels');

// Controller cho Riders' Championship
exports.getRiderStandings = async (req, res) => {
    const { year, category } = req.query; // Lấy year và category từ query parameters

    // Kiểm tra xem year có được cung cấp không
    if (!year) {
        return res.status(400).json({ message: 'Year is required' });
    }

    try {
        const results = await standingModels.getRiderStandings(year, category); // Gọi hàm để lấy dữ liệu standings

        if (results.length === 0) {
            return res.status(404).json({ message: 'No standings found for the given year and category' });
        }

        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (error) {
        console.error('Lỗi khi lấy standings:', error);
        res.status(500).json({ message: 'Error fetching rider standings' }); // Xử lý lỗi khi xảy ra
    }
};

// Controller cho Teams' Championship
exports.getTeamStandings = async (req, res) => {
    const { year, teamType } = req.query; // Lấy year và teamType từ query parameters

    // Kiểm tra xem year có được cung cấp không
    if (!year) {
        return res.status(400).json({ message: 'Year is required' });
    }

    // Kiểm tra xem teamType có được cung cấp không
    if (!teamType) {
        return res.status(400).json({ message: 'Team type is required' });
    }

    try {
        const results = await standingModels.getTeamStandings(year, teamType); // Gọi hàm để lấy dữ liệu standings

        if (results.length === 0) {
            return res.status(404).json({ message: 'No standings found for the given year and team type' });
        }

        res.json(results); // Trả về kết quả khi truy vấn thành công
    } catch (error) {
        console.error('Lỗi khi lấy standings:', error);
        res.status(500).json({ message: 'Error fetching team standings' }); // Xử lý lỗi khi xảy ra
    }
};
