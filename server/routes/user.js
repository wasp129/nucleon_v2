const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('../passport');
var mongoose = require("mongoose");

router.post('/signup', (req, res) => {
    console.log('user signup');

    const { name, company, country, email, password } = req.body
    console.log(req.body)
    // ADD VALIDATION
    User.findOne({ email: email }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the email: ${email}`
            })
        }
        else {
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                name: name,
                company: company,
                country: country,
                email: email,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post('/login', function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            email: req.user.email,
            name: req.user.name
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user ======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

module.exports = router
