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