const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin}=require("../db");
const {Course}=require("../db")
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const password=req.body.password;
    await Admin.create({
        username,
        password
    })
    res.json({
        msg:"User created"
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
    const imageLink=req.body.imageLink
    const courceID= await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        msg:"Couce created",
        courceID
    })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const allcourses= await Course.find({

    });

    res.json({
        allcourses

    })
});

module.exports = router;