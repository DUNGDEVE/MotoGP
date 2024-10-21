const { pool } = require('../config/database');

const getRiderStandings = async (year, category) => {
    try {
        const sql = `
            SELECT 
                rs.currentPos AS pos,  -- Lấy vị trí của rider
                r.rider_id, 
                r.riderImg,  -- Lấy ảnh của rider
                r.rider_number AS bikeNumber,  -- Lấy số xe của rider
                r.firstname AS firstName, 
                r.lastname AS lastName, 
                t.teamName,  -- Lấy tên đội
                c.flagImg AS flag,  -- Lấy ảnh cờ quốc gia
                rs.currentPoint AS point  -- Lấy điểm của rider
            FROM 
                rider_statistics rs
            JOIN 
                riders r ON rs.rider_id = r.rider_id
            JOIN 
                teams t ON r.team_id = t.team_id
            JOIN 
                countries c ON r.country_id = c.country_id  -- Liên kết đến bảng countries
            WHERE 
                rs.season_year = ? AND 
                r.rider_type = ? 
            ORDER BY 
                rs.currentPoint DESC;
        `;

        const [results] = await pool.query(sql, [year, category]);

        return results;
    } catch (error) {
        console.error('Lỗi trong getRiderStandings:', error.message); // Log chi tiết lỗi
        throw new Error('Error fetching rider standings');
    }
};

// Hàm lấy standings của team với lọc theo team_type
const getTeamStandings = async (year, teamType) => {
    try {
        const sql = `
            SELECT 
                ts.position AS pos,  -- Lấy vị trí của team
                t.team_id,
                t.teamName,  -- Lấy tên đội
                ts.points AS totalPoints  -- Lấy tổng điểm của team
            FROM 
                team_statistics ts
            JOIN 
                teams t ON ts.team_id = t.team_id
            WHERE 
                ts.season_year = ? AND 
                t.team_type = ?  -- Lọc theo team_type
            ORDER BY 
                ts.position ASC;  -- Sắp xếp theo vị trí từ lớn đến bé
        `;

        const [results] = await pool.query(sql, [year, teamType]);

        return results;
    } catch (error) {
        console.error('Lỗi trong getTeamStandings:', error.message); // Log chi tiết lỗi
        throw new Error('Error fetching team standings');
    }
};

module.exports = {
    getRiderStandings,
    getTeamStandings
};
