const express = require('express');
const router = express.Router();
const Assessment = require('../models/assessment');

router.post('/save', (req, res) => {
    const { _id, name, teamMembers, proximity, bureaucracy, cultureQuestions, methods, legacy, architecture, reusability, futureProofing } = req.body;
    console.log(req.body)
    Assessment.findOne({ _id: _id }, (err, assessment) => {
        const newAssessment = new Assessment({
            userId: req.user._id,
            name: name,
            teamMembers: teamMembers,
            proximity: proximity,
            bureaucracy: bureaucracy,
            cultureQuestions: cultureQuestions,
            methods: methods,
            legacy: legacy,
            architecture: architecture,
            reusability: reusability,
            futureProofing: futureProofing
        })
        newAssessment.save((err, savedAssessment) => {
            if (err) return res.json(err)
            res.json(savedAssessment)
        })
    })
});

router.get("/getAll", (req, res) => {
    Assessment.find({userId: req.user._id}, (err, assessment) => {
        console.log(req.body);
        if (err) {
            res.json({assessment: err})
        } else {
            res.json({assessment: assessment})
        }
    })
});


router.delete("/delete/:id", (req, res) => {
    console.log(req.params.id)
    Assessment.findByIdAndRemove(req.params.id, (err, assessment) => {
        if (err) {
            res.json({assessment: err})
        } else {
            res.json({assessment: assessment})
        }
    })
});

module.exports = router;