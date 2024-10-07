const { pool } = require('../config/database')

const getAllMotoGPTeam = async () => {
    try {
        const [results] = await pool.query(`SELECT * FROM teams`);
        return results; // Trả về kết quả sau khi query thành công
    } catch (error) {
        throw new Error('Database query failed'); // Bắt lỗi nếu query thất bại
    }
};


module.exports = {
    getAllMotoGPTeam
}