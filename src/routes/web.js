const express = require('express')
const { getHomepage, getCalendar, getResultStanding, getRiderTeam, getRiderDetail } = require('../controllers/homeControlller')
const apiRoutes = require('./api');
const teamController = require('../controllers/teamController')
const riderController = require('../controllers/riderController')
const calendarController = require('../controllers/callendarController')
const standingController = require('../controllers/standingController')
const resultController = require('../controllers/resultController')
const router = express.Router()

//HOME PAGE
router.get('/', getHomepage)


//EXAMPLE

router.get('/calendar', getCalendar)
router.get('/result-standing', getResultStanding)
router.get('/api/calendar', calendarController.getMotoGPCalendar)
router.post('/api/teams/add', teamController.addTeam)
router.patch('/api/teams/update', teamController.updateTeam)
router.delete('/api/teams/delete', teamController.deleteTeam)
router.get('/api/teams', teamController.getTeam)

router.post('/api/riders/add', riderController.addRider)

router.patch('/api/riders/update', riderController.updateRider)
router.delete('/api/riders/delete', riderController.deleteRider)
router.get('/api/riders/getAll', riderController.getAll)

router.get('/api/riders', riderController.getRider)
router.get('/api/riders/:rider_id', riderController.getRiderDetails)
router.get('/api/teams/:team_id', teamController.getTeamDetails)
router.get('/api/standings/riders', standingController.getRiderStandings);
router.get('/api/standings/teams', standingController.getTeamStandings);

// Lấy danh sách tất cả tên sự kiện
router.get('/api/result/event', resultController.getEventNames);

// Lấy danh sách tất cả tên thể loại
router.get('/api/result/category', resultController.getCategories);

// Lấy danh sách tất cả tên session
router.get('/api/result/session', resultController.getSessions);

// Lọc kết quả theo năm, sự kiện, thể loại và session (sử dụng GET)
router.post('/api/result/filter', resultController.filterResults);

//router.get('/rider-team', getRiderTeam)
//router.get('/rider-detail', getRiderDetail)

module.exports = router