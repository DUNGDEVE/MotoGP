const { pool } = require('../config/database')

const getAllRider = async () => {
    let [results, fields] = await pool.query(`SELECT * FROM teams`);
    return results
}
module.exports = {
    getAllRider
}