exports.computeHW = function (HW1, HW2, HW3){
    //if all three are 100% return 20 pts to the final grade
    /*We also need to deal with the range of the homeworks.
    None of them can be over 100 or the program will return
    a null value or negative value. They also can't be in 
    the negatives*/
    HW1 = parseInt(HW1);
    HW2 = parseInt(HW2);
    HW3 = parseInt(HW3);

    if(HW1 > 100 || HW2 > 100 || HW3 > 100){//Upper range
        return -1;
    }

    if(HW1 < 0 || HW2 < 0 || HW3 < 0){//Lower range
        return -1;
    }

    const finalHWGrade = Math.round((((HW1 + HW2 + HW3)/3)*0.2) * 1000) / 1000;

    return finalHWGrade;
}

exports.computeExams = function(exam1, exam2){
    //if both exams are 100% return 80 pts to the final grade
    /*Neither of them can be over 100 or the program will return
    a null value or negative value. They also can't be in 
    the negatives*/
    exam1 = parseInt(exam1);
    exam2 = parseInt(exam2);

    if(exam1 > 100 || exam2 > 100){//Upper range
        return -1;
    }

    if(exam1 < 0 || exam2 < 0){//Upper range
        return -1;
    }

    var finalExamGrade = ((4/5) * (exam1 + exam2))/2;

    return finalExamGrade;
}


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


/* Returns the corresponding letter grade for each range. 
    Return error if finalGrade is out of range. */
exports.getFinalLetterGrade = function(finalGrade){
    switch (true) {
        case (finalGrade >= 93):
            return 'A'
        case (finalGrade <= 92 && finalGrade >= 90):
            return 'A-'
        case (finalGrade <= 89 && finalGrade >= 87):
            return 'B+'
        case (finalGrade <= 86 && finalGrade >= 83):
            return 'B'
        case (finalGrade <= 82 && finalGrade >= 80):
            return 'B-'
        case (finalGrade <= 79 && finalGrade >= 77):
            return 'C+'
        case (finalGrade <= 76 && finalGrade >= 73):
            return 'C'
        case (finalGrade <= 72 && finalGrade >= 70):
            return 'C-'
        case (finalGrade <= 69 && finalGrade >= 67):
            return 'D+'
        case (finalGrade <= 66 && finalGrade >= 63):
            return 'D'
        case (finalGrade <= 62 && finalGrade >= 60):
            return 'D-'
        case (finalGrade <= 59):
            return 'F'
        default:
            return "ERROR! Invalid final grade input"
    }
}