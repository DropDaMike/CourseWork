var prompt = require('prompt');
let cHW = require('./computeHW');
let cEG = require('./computeExam');
let cFE = require('./computeFinal');
let cFLG = require('./computeFinalLetterGrade')

prompt.start();

 var prompt = require('prompt');
 var schema = {
    properties: {
      name: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      email: {
        
      },

      homework1: { type: 'number'},
      homework2: { type: 'number'},
      homework3:  {type: 'number'},

      exam1: { type: 'number'},
      exam2: { type: 'number'}
    }
  };


  // Get two properties from the user: username and email
  prompt.get(schema, function (err, result) {
    // Log the results.

    console.log('Command-line input received:');
    console.log('  username: ' + result.name);
    console.log('  email: ' + result.email);
    console.log('  homework1:' + result.homework1);
    console.log('  homework2:' + result.homework2);
    console.log('  homework3:' + result.homework3);
    console.log('  exam1:', result.exam1);
    console.log('  exam2:', result.exam2);
    var hwGrade;
    var examGrade;
    var finalGrade;

    hwGrade = cHW.computeHW(result.homework1, result.homework2, result.homework3);
    examGrade = cEG.computeExams(result.exam1, result.exam2);
    finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
    finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade)

    //console.log("Final grade is ", finalGrade);
    console.log("Final letter grade is ", finalLetterGrade)

  });

  // Start the prompt
  prompt.start();