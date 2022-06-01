  'use strict';

  const express = require( 'express' );
  const layouts = require( 'express-ejs-layouts' );
  const app = express();
  const testController = require( './controllers/testController' );
  const errorController = require( './controllers/errorController' );
  const gradesController = require( './controllers/gradesController' );

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

  app.use(
      express.urlencoded({
          extended: false
          })
      );
  app.use(express.json());
  app.set( 'port', process.env.PORT || 3000 );

  app.set( 'view engine', 'ejs' );
  app.use( layouts );
  app.use( express.static( 'public' ) );

  app.get( '/', function( req, res )  {
    res.render( 'index' );
  } );

  app.get( '/grades', gradesController.getAllGrades );
  app.get( '/addTest', gradesController.getGradePage );
  app.post( '/grade', gradesController.saveGrades );

  app.get( '/displayTests', testController.showTestCases );

  app.use( errorController.pageNotFoundError );
  app.use( errorController.internalServerError );

  const server = app.listen( app.get( 'port' ), () => {
    console.log( `Server running at http://localhost:${app.get('port')}` );
  } );
  module.exports = server;
