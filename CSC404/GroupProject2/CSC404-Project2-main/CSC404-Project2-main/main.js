'use strict';

const express = require( 'express' ),
  layouts = require( 'express-ejs-layouts' ),
  app = express(),
  testController = require( './controllers/testController' ),
  errorController = require( './controllers/errorController' );

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

app.get( '/displayTests', testController.showTestCases );
app.get( '/addTest', testController.showTCForm );
app.post( '/addTest', testController.addTestCase );

app.use( errorController.pageNotFoundError );
app.use( errorController.internalServerError );

app.listen( app.get( 'port' ), () => {
  console.log( `Server running at http://localhost:${app.get('port')}` );
} );