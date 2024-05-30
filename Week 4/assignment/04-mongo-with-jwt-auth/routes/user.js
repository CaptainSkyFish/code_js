const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const JWT_secret = require("../config.js");

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne( {username} );
    if(user)
        res.status(403).json({ msg : "User already exists! Try signing in" });
    else{
        User.create({
            username,
            password
        })
        .then(() => {
            jwt.sign({username}, JWT_secret, {expiresIn: "1h"});
            res.status(205).json({ msg : "User created successfully." })
        })
        .catch(err)(() =>{
            console.error(err);
            res.status(407).json({ msg : "User signup failed" });
        })
    }
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const user = await Admin.findOne({username: username});
    if(!user)
        res.status(406).json({ msg : "User not found" });
    else{
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid)
            res.status(409).json({ msg : "Incorrect Password! Please try again" })
        else{
            const yourToken = jwt.sign({username}, JWT_secret, {expiresIn: '1d'});            
            res.json({ 
                msg : "User signin successfull!", 
                token : yourToken
            })
        }
    }
});

router.get('/courses', (req, res) => {
    const courseList = Course.find();

    res.json({
        courses : courseList
    })
});

router.post('/courses/:courseId', userMiddleware(req.headers.authorization), async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.user;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses : courseId
        }
    })

    res.json({
        msg : "Course purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username : req.user
    })

    const myCourses = await Course.find({
        _id : {
            "$in" : user.purchasedCourses
        }
    });
    res.json({
        courses : myCourses
    })
});

module.exports = router