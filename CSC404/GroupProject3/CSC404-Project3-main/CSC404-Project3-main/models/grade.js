'use strict';

const mongoose = require( 'mongoose' );

var testSchema = mongoose.Schema( {
  hw1: {type: Number, default: -1},
  hw2: {type: Number, default: -1},
  hw3: {type: Number, default: -1},
  exam1: {type: Number, default: -1},
  exam2: {type: Number, default: -1},
  finalGrade: {type: Number, default: -1},
  letterGrade: String
} );

module.exports = mongoose.model( 'Grade', testSchema );
