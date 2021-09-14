const express = require('express')
const router = express.Router()

const {AddTeam,
    getTeamMemberById,
    getTeam,
    updateTeamMember,
    deleteTeamMember} = require("../controllers/team.controller")

router.get("/teams", getTeam)
router.get("/detailmember/:id", getTeamMemberById)
router.post("/addteam",AddTeam)
router.delete("/deletemember/:id", deleteTeamMember)
router.put("/updatemember/:id", updateTeamMember)

module.exports = router