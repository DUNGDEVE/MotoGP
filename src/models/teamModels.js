const { pool } = require('../config/database')

const getAllTeam = async () => {
    try {
        const [results] = await pool.query(`SELECT * FROM teams`);
        return results; // Trả về kết quả sau khi query thành công
    } catch (error) {
        throw new Error('Database query failed'); // Bắt lỗi nếu query thất bại
    }
};

const getTeamByID = async (teamId) => {
    try {
        const [rows] = await pool.query(`
            SELECT 
                t.team_id,
                t.teamName,
                t.team_type,
                t.backgroundName,
                t.motoImg,
                r.rider_id,
                r.firstname,
                r.lastname,
                r.riderImg,
                r.riderHashtag
            FROM 
                teams t
            LEFT JOIN 
                riders r ON r.team_id = t.team_id
            WHERE 
                t.team_id = ?;
        `, [teamId]);

        if (rows.length === 0) {
            return null;
        }

        // Bước 2: Tạo đối tượng cho thông tin đội và tay đua
        const team = {
            teamId: rows[0].team_id,
            teamName: rows[0].teamName,
            teamType: rows[0].team_type,
            backgroundName: rows[0].backgroundName,
            motoImg: rows[0].motoImg || 'path/to/default/image.png',
            riders: rows.map(row => ({
                riderId: row.rider_id,
                name: `${row.firstname} ${row.lastname}`,
                img: row.riderImg || 'path/to/default/image.png',
                hashtag: row.riderHashtag
            }))
        };

        // Bước 3: Trả về thông tin đội
        return team;

    } catch (error) {
        console.error('Lỗi trong getTeamByID:', error);
        throw new Error('Database query failed');
    }
};

const addTeam = async (team) => {
    try {
        const values = [team.backgroundName, team.team_type, team.teamName, team.motoImg, team.riderName1, team.riderName2];
        const [results] = await pool.query(`
    INSERT INTO teams (backgroundName, team_type, teamName, motoImg, riderName1, riderName2)
    VALUES
    (?, ?, ?, ?, ?, ?);
  `, values);
        return results; // Trả về kết quả sau khi query thành công
    } catch (error) {
        throw new Error('Database query failed'); // Bắt lỗi nếu query thất bại
    }
};

const updateTeam = async (team) => {
    try {
        const values = [team.backgroundName, team.team_type, team.teamName, team.riderName1, team.riderName2, team.motoImg, team.team_id];
        const [results] = await pool.query(`
    UPDATE teams
    SET backgroundName = ?, team_type = ?, teamName = ?, riderName1 = ?, riderName2 = ?, motoImg = ?
    WHERE team_id = ?;
  `, values);
        return results; // Trả về kết quả sau khi query thành công
    } catch (error) {
        console.log(error);
        throw new Error('Database query failed'); // Bắt lỗi nếu query thất bại
    }
};

const deleteTeam = async (team) => {
    try {
        const values = [team.id];
        const [results] = await pool.query(`
            SET FOREIGN_KEY_CHECKS= 0;
    DELETE FROM teams WHERE team_id = 1;
    SET FOREIGN_KEY_CHECKS= 1;

  `, values);
        return results; // Trả về kết quả sau khi query thành công
    } catch (error) {
        console.log(error);
        throw new Error('Database query failed'); // Bắt lỗi nếu query thất bại
    }
};

module.exports = {
    getAllTeam, getTeamByID, addTeam, updateTeam, deleteTeam
}