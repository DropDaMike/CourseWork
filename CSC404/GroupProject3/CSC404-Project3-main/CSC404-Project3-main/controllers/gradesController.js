'use strict';

const Grade = require( '../models/grade' );
const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controller");

exports.getAllGrades = (req, res ) => {
    Grade.find( {} )
        .exec()
        .then( ( grades ) => {
            res.render( 'grades', {
                grades: grades
            });
        })
        .catch( (error) => {
            console.log( error.message );
            return[];
        })
        .then( () => {
            console.log( 'promise complete' );
        });
};

exports.getGradePage = ( req, res ) => {
    res.render( 'addTest' );
};

exports.showGradeDB = (req, res ) => {
    res.render('grades', {
        allTestCases: Grade.getAllGrades
    });
};

exports.saveGrades = ( req, res ) => {

    let newGrades = new Grade({
        hw1: req.body.hw1,
        hw2: req.body.hw2,
        hw3: req.body.hw3,
        exam1: req.body.exam1,
        exam2: req.body.exam2,

        finalGrade: getFinalGrade(computeHW(req.body.hw1, req.body.hw2, req.body.hw3), computeExams(req.body.exam1, req.body.exam2)),
        letterGrade: getFinalLetterGrade(getFinalGrade(computeHW(req.body.hw1, req.body.hw2, req.body.hw3), computeExams(req.body.exam1, req.body.exam2)))
    });

    if (newGrades.finalGrade === -1) {
        newGrades.letterGrade = "ERROR! Invalid input in homework or exams."
    } 

    newGrades.save()
        .then( result => {
            res.render( 'thanks' );
        } )
        .catch(error => {
            res.send( error );
        });
};