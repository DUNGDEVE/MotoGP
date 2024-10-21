const { pool } = require('../config/database');

// Hàm lấy danh sách tất cả tên sự kiện
const getAllEventNames = async () => {
    try {
        const query = `SELECT event_id, event_name FROM events;`;
        const [results] = await pool.query(query);

        return results.map(event => ({
            id: event.event_id, // Thêm id
            name: event.event_name,
            value: event.event_name.replace(/\s+/g, '-').toLowerCase()
        }));
    } catch (error) {
        throw new Error(`Database query failed: ${error.message}`);
    }
};

// Hàm lấy danh sách tất cả tên thể loại (category)
const getAllCategories = async () => {
    try {
        const query = `SELECT category_id, category_name FROM categories;`;
        const [results] = await pool.query(query);

        return results.map(category => ({
            id: category.category_id, // Thêm id
            name: category.category_name,
            value: category.category_name.replace(/\s+/g, '-').toLowerCase()
        }));
    } catch (error) {
        throw new Error(`Database query failed: ${error.message}`);
    }
};

// Hàm lấy danh sách tất cả tên session
const getAllSessions = async () => {
    try {
        const query = `SELECT session_id, session_name FROM sessions;`;
        const [results] = await pool.query(query);

        return results.map(session => ({
            id: session.session_id, // Thêm id
            name: session.session_name,
            value: session.session_name.replace(/\s+/g, '-').toLowerCase()
        }));
    } catch (error) {
        throw new Error(`Database query failed: ${error.message}`);
    }
};

/**
 * Hàm lọc kết quả dựa trên event_id, category_id và session_id
 * @param {number} event - ID của sự kiện
 * @param {number} category - ID của thể loại
 * @param {number} session - ID của phiên
 * @returns {Promise<Array>} - Trả về mảng kết quả lọc
 * @throws {Error} - Ném lỗi nếu truy vấn cơ sở dữ liệu thất bại
 */
const filterResults = async (event, category, session) => {
    try {
        const query = `
            SELECT 
                r.position AS pos,
                r.points AS point,
                rid.riderImg,
                rid.rider_number AS bikeNumber,
                rid.firstname AS firstName,
                rid.lastname AS lastName,
                c.flagImg AS flag,
                t.teamName,
                r.time_gap AS time
            FROM results r
            JOIN riders rid ON r.rider_id = rid.rider_id
            JOIN countries c ON rid.country_id = c.country_id
            JOIN teams t ON r.team_id = t.team_id
            JOIN events e ON r.event_id = e.event_id
            JOIN categories cat ON r.category_id = cat.category_id
            JOIN sessions s ON r.session_id = s.session_id
            WHERE e.event_id = ?
              AND cat.category_id = ?
              AND s.session_id = ?;
        `;

        // Thực hiện truy vấn với các tham số event, category và session
        const [results] = await pool.query(query, [event, category, session]);

        return results;
    } catch (error) {
        console.error(`Database query failed: ${error.message}`);
        throw new Error(`Database query failed: ${error.message}`);
    }
};

module.exports = {
    getAllEventNames,
    getAllCategories,
    getAllSessions,
    filterResults
};
