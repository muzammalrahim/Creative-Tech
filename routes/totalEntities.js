const Faq = require('../models/Faq')
const Service = require('../models/Services')
const Team = require('../models/Team')
const Testimonial = require('../models/Testimonial')
const User = require('../models/User')
const express = require("express");
const router = express.Router();


const getAllEntities = async (req, res) => {
    try {

        const faq = await Faq.find()
        const service = await Service.find()
        const team = await Team.find()
        const testimonial = await Testimonial.find()
        const user = await User.find()

        return res.json({
            faqs :faq.length,
            services :service.length,
            teams :team.length,
            testimonials :testimonial.length,
            users: user.length,
            success :true
        })

    } catch (error) {
        return res.json({
            error,
            success:false,
         })
    }


}


router.get("/allEntities", getAllEntities);


module.exports = router;
