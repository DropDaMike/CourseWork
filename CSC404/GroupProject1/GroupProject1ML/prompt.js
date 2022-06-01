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
      exam1: { type: 'number'},
      exam2: { type: 'number'},
      exam3: { type: 'number'}
    }
  };

  var student = {
    name: '',
    id: '',
    exam1: 60,
    exam2: 60,
    exam3: 60,
    at1: true,
    at2: true,
    at3: true,
    at4: true,
    at5: true,
    adjust: true,
    final: 100,
    letter: ' '
  };

 
 
  //
  // Get two properties from the user: username and email
  //
  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);
    console.log('  exam1:', result.exam1);
    console.log('  exam2:', result.exam2);
    console.log('  exam3:', result.exam3);
    var totalExam;

    totalExam = (1/3) * (result.exam1 + 
                         result.exam2 + 
                         result.exam3);
    console.log(' Average exam =', totalExam )

  });

 
 //
  // Start the prompt
  //
  prompt.start();
