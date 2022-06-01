const { grades } = require( './controllers/testController' );
const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controllers/controller");

const mongoose = require( 'mongoose' ),
  Grade = require( './models/grade' );
  mongoose.Promise = global.Promise;

  mongoose.connect( 'mongodb://localhost/grades' );
const db = mongoose.connection;

db.once( 'open', () => {
  console.log( 'Successfully connected to MongoDB using Mongoose!' );
} );

Grade.remove( {} )
  .exec()
  .then( () => {
    console.log( 'Test data is empty!' );
  } );

var commands = [];

grades.forEach( ( c ) => {
    commands.push( Grade.create( {
      hw1: c.hw1,
      hw2: c.hw2,
      hw3: c.hw3,
      exam1: c.exam1,
      exam2: c.exam2,
      finalGrade: c.exam1,
      finalGrade: getFinalGrade(computeHW(c.hw1, c.hw2, c.hw3), computeExams(c.exam1, c.exam2)),
      letterGrade: getFinalLetterGrade(getFinalGrade(computeHW(c.hw1, c.hw2, c.hw3), computeExams(c.exam1, c.exam2)))
    } ) );
  } );

  Promise.all( commands )
  .then( r => {
    console.log( JSON.stringify( r ) );
    mongoose.connection.close();
  } )
  .catch( error => {
    console.log( `ERROR: ${error}` );
  } );