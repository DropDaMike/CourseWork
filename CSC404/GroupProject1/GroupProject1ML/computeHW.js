exports.computeHW = function (HW1, HW2, HW3){
    //if all three are 100% return 20 pts to the final grade
    /*We also need to deal with the range of the homeworks.
    None of them can be over 100 or the program will return
    a null value or negative value. They also can't be in 
    the negatives*/

    if(HW1 > 100 || HW2 > 100 || HW3 > 100){//Upper range
        return -1;
    }

    if(HW1 < 0 || HW2 < 0 || HW3 < 0){//Lower range
        return -1;
    }

    var finalHWGrade = (((HW1 + HW2 + HW3)/3)*0.2);

    return finalHWGrade;
}