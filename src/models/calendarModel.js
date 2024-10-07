const { pool } = require('../config/database')

const getAllMotoGPCalendar = async () => {
	try {
		const [results] = await pool.query(`
			SELECT * FROM events 
			INNER JOIN circuits 
					ON events.circuit_id = circuits.circuit_id
			INNER JOIN countries ON circuits.country_id  = countries.country_id ; `);
		return results; // Trả về kết quả sau khi query thành công
	} catch (error) {
		throw new Error('Database query failed' + error); // Bắt lỗi nếu query thất bại
	}
};


module.exports = {
	getAllMotoGPCalendar
}