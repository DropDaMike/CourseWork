exports.computeExams = function(exam1, exam2){
    //if both exams are 100% return 80 pts to the final grade
    /*Neither of them can be over 100 or the program will return
    a null value or negative value. They also can't be in 
    the negatives*/

    if(exam1 > 100 || exam2 > 100){//Upper range
        return -1;
    }

    if(exam1 < 0 || exam2 < 0){//Lower range
        return -1;
    }

    var finalExamGrade = ((4/5) * (exam1 + exam2))/2;

    return finalExamGrade;
}