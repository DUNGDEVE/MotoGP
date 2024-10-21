const { pool } = require('../config/database')
const { getAllRider } = require('../services/CRUDRider')
const { getAllTeam } = require('../services/CRUDTeam')
const { teamController } = require('../controllers/teamController')
const getHomepage = (req, res) => {

    return res.render('index.ejs')
}

const getCalendar = (req, res) => {
    return res.render('calendar.ejs')
}
const getResultStanding = (req, res) => {
    return res.render('result-standing')
}
const getRiderTeam = async (req, res) => {

    return (res.render('rider-team'))
}
const getRiderDetail = (req, res) => {
    res.render('rider-detail.ejs')
}


module.exports = {
    getHomepage, getCalendar, getResultStanding, getRiderTeam, getRiderDetail
}