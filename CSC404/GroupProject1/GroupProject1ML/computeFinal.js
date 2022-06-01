exports.getFinalGrade = function(hwGrade, examGrade){
    if(hwGrade < 0 || examGrade < 0){//Lower bound
        return "ERROR! Invalid grade put in homework or exams.";
    }else if(hwGrade > 20 || examGrade > 80){//Upper bound
        return "ERROR! Invalid grade put in homework or exams.";
    }

    //Compute final exam grade by adding the two functions together
    var betaExamGrade = hwGrade + examGrade;

    //The code below checks if the statement can be rounded up
    if(betaExamGrade + 0.5 > Math.floor(betaExamGrade) + 1){
        betaExamGrade = Math.floor(betaExamGrade) + 1;
    }else{
        betaExamGrade = Math.floor(betaExamGrade);
    }

    return betaExamGrade;
}