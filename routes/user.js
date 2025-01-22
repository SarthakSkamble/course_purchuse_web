const { Router } = require("express");
const {User}=require("../db");
const {Course}=require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username=req.body.username;
    const password=req.body.password;
    await User.create({
        username,
        password
    })
    res.json({
        msg:"User created"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
   const allcourses= await Course.find({

    })
     res.json({
        allcourses
     })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const courseId = req.params.courseId; // Extract course ID from URL
        const username = req.headers.username; // Extract username from headers

        // Perform the update operation in the database
        const updatedUser = await User.findOneAndUpdate(
            { username }, // Find the user by username
            { $push: { purchuse: courseId } }, // Push the course ID into the "purchusedCourses" array
             // Return the updated document after the update
        );

        // Check if the user exists
        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Send a success response
        res.json({ msg: "Course purchased successfully", updatedUser });
    } catch (error) {
        console.error(error); // Log any error that occurs
        res.status(500).json({ msg: "Internal server error", error: error.message });
    }
});


router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username=req.headers.username;
    const courselist= await User.find({
        username
    },
{
  
})
});

module.exports = router