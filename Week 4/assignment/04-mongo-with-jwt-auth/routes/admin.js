const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_secret = require("../config.js");

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await Admin.findOne({username: username});
    if(user)
        res.status(406).json({ msg : "Admin already exists" });
    
    await Admin.create({
        username,
        password
    })
    .then(() => {
        jwt.sign({username}, JWT_secret, {expiresIn: "1h"});
        res.status(205).json({ msg : "Admin created successfully." })
    })
    .catch(err)(() =>{
        console.error(err);
        res.status(407).json({ msg : "Admin signup failed" });
    })
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await Admin.findOne({username: username});
    if(!user)
        res.status(406).json({ msg : "Admin not found" });
    else{
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid)
            res.status(409).json({ msg : "Incorrect Password! Please try again" })
        else{
            const yourToken = jwt.sign({username}, JWT_secret, {expiresIn: '1d'});            
            res.json({ 
                msg : "Admin signin successfull!", 
                token : yourToken
            })
        }
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const { title, description, price, imageLink } = req.body;
    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    });
    res.json({
        msg: "Course created successfully.",
        courseId: newCourse._id
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const courseList = await Course.find({ });

    res.json({
        courses: courseList
    })
});

module.exports = router;