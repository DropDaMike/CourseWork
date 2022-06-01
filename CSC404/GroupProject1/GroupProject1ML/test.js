let cHW = require('./computeHW');
let cEG = require('./computeExam');
let cFE = require('./computeFinal');
let cFLG = require('./computeFinalLetterGrade')

var hw1 = 0;
var hw2 = 0;
var hw3 = 0;
var exam1 = 0;
var exam2 = 0;

var hwGrade = cHW.computeHW(hw1, hw2, hw3);
var examGrade = cEG.computeExams(exam1, exam2);
var finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
var finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC1:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade); 
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 0;
hw3 = 0;
exam1 = 10;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC2:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 0;
hw3 = 0;
exam1 = 20;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC3:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 0;
hw3 = 0;
exam1 = 30;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC4:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 0;
hw3 = 0;
exam1 = 40;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC5:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 0;
hw3 = 0;
exam1 = 50;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC6:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 0;
hw3 = 0;
exam1 = 60;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC7:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 0;
hw3 = 0;
exam1 = 70;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC8:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 0;
hw3 = 0;
exam1 = 80;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC9:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 0;
hw3 = 0;
exam1 = 90;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC10:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 0;
hw3 = 0;
exam1 = 100;
exam2 = 0;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC11:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 10;
hw3 = 0;
exam1 = 0;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC12:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 10;
hw3 = 0;
exam1 = 10;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC13:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 10;
hw3 = 0;
exam1 = 20;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC14:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 10;
hw3 = 0;
exam1 = 30;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC15:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 10;
hw3 = 0;
exam1 = 40;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC16:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 10;
hw3 = 0;
exam1 = 50;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC17:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 10;
hw3 = 0;
exam1 = 60;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC18:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 10;
hw3 = 0;
exam1 = 70;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC19:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 10;
hw3 = 0;
exam1 = 80;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC20:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 10;
hw3 = 0;
exam1 = 90;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC21:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 10;
hw3 = 0;
exam1 = 100;
exam2 = 10;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC22:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 10;
hw3 = 10;
exam1 = 0;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC23:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 10;
hw3 = 10;
exam1 = 10;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC24:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 10;
hw3 = 10;
exam1 = 20;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC25:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 10;
hw3 = 10;
exam1 = 30;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC26:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 10;
hw3 = 10;
exam1 = 40;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC27:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 10;
hw3 = 10;
exam1 = 50;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC28:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 10;
hw3 = 10;
exam1 = 60;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC29:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 10;
hw3 = 10;
exam1 = 70;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC30:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 10;
hw3 = 10;
exam1 = 80;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC31:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 10;
hw3 = 10;
exam1 = 90;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC32:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 10;
hw3 = 10;
exam1 = 100;
exam2 = 20;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC33:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 20;
hw3 = 20;
exam1 = 0;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC34:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 20;
hw3 = 20;
exam1 = 10;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC35:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 20;
hw3 = 20;
exam1 = 20;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC36:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 20;
hw3 = 20;
exam1 = 30;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC37:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 20;
hw3 = 20;
exam1 = 40;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC38:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 20;
hw3 = 20;
exam1 = 50;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC39:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 20;
hw3 = 20;
exam1 = 60;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC40:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 20;
hw3 = 20;
exam1 = 70;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC41:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 20;
hw3 = 20;
exam1 = 80;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC42:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 20;
hw3 = 20;
exam1 = 90;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC43:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 20;
hw3 = 20;
exam1 = 100;
exam2 = 30;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC44:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 30;
hw3 = 30;
exam1 = 0;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC45:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 30;
hw3 = 30;
exam1 = 10;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC46:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 30;
hw3 = 30;
exam1 = 20;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC47:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 30;
hw3 = 30;
exam1 = 30;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC48:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 30;
hw3 = 30;
exam1 = 40;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC49:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 30;
hw3 = 30;
exam1 = 50;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC50:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 30;
hw3 = 30;
exam1 = 60;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC51:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 30;
hw3 = 30;
exam1 = 70;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC52:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 30;
hw3 = 30;
exam1 = 80;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC53:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 30;
hw3 = 30;
exam1 = 90;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC54:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 30;
hw3 = 30;
exam1 = 100;
exam2 = 40;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC55:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 40;
hw3 = 40;
exam1 = 0;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC56:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 40;
hw3 = 40;
exam1 = 10;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC57:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 40;
hw3 = 40;
exam1 = 20;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC58:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 40;
hw3 = 40;
exam1 = 30;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC59:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 40;
hw3 = 40;
exam1 = 40;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC60:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 40;
hw3 = 40;
exam1 = 50;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC61:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 40;
hw3 = 40;
exam1 = 60;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC62:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 40;
hw3 = 40;
exam1 = 70;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC63:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 40;
hw3 = 40;
exam1 = 80;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC64:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 40;
hw3 = 40;
exam1 = 90;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC65:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 40;
hw3 = 40;
exam1 = 100;
exam2 = 50;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC66:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 50;
hw3 = 50;
exam1 = 0;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC67:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 50;
hw3 = 50;
exam1 = 10;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC68:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 50;
hw3 = 50;
exam1 = 20;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC69:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 50;
hw3 = 50;
exam1 = 30;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC70:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 50;
hw3 = 50;
exam1 = 40;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC71:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 50;
hw3 = 50;
exam1 = 50;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC72:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 50;
hw3 = 50;
exam1 = 60;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC73:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 50;
hw3 = 50;
exam1 = 70;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC74:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 50;
hw3 = 50;
exam1 = 80;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC75:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 50;
hw3 = 50;
exam1 = 90;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC76:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 50;
hw3 = 50;
exam1 = 100;
exam2 = 60;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC77:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 60;
hw3 = 60;
exam1 = 0;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC78:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 60;
hw3 = 60;
exam1 = 10;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC79:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 60;
hw3 = 60;
exam1 = 20;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC80:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 60;
hw3 = 60;
exam1 = 30;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC81:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 60;
hw3 = 60;
exam1 = 40;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC82");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 60;
hw3 = 60;
exam1 = 50;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC83:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 60;
hw3 = 60;
exam1 = 60;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC84:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 60;
hw3 = 60;
exam1 = 70;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC85:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 60;
hw3 = 60;
exam1 = 80;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC86:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 60;
hw3 = 60;
exam1 = 90;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC87:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 60;
hw3 = 60;
exam1 = 100;
exam2 = 70;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC88:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 70;
hw3 = 70;
exam1 = 0;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC89:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 70;
hw3 = 70;
exam1 = 10;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC90:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 70;
hw3 = 70;
exam1 = 20;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC91:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 70;
hw3 = 70;
exam1 = 30;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC92:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 70;
hw3 = 70;
exam1 = 40;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC93:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 70;
hw3 = 70;
exam1 = 50;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC94:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 70;
hw3 = 70;
exam1 = 60;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC95:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 70;
hw3 = 70;
exam1 = 70;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC96:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 70;
hw3 = 70;
exam1 = 80;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC97:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 70;
hw3 = 70;
exam1 = 90;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC98:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 70;
hw3 = 70;
exam1 = 100;
exam2 = 80;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC99:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 80;
hw3 = 80;
exam1 = 0;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC100:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 80;
hw3 = 80;
exam1 = 10;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC101:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 80;
hw3 = 80;
exam1 = 20;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC102:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 80;
hw3 = 80;
exam1 = 30;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC103:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 80;
hw3 = 80;
exam1 = 40;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC104:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 80;
hw3 = 80;
exam1 = 50;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC105:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 80;
hw3 = 80;
exam1 = 60;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC106:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 80;
hw3 = 80;
exam1 = 70;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC107:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 80;
hw3 = 80;
exam1 = 80;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC108:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 80;
hw3 = 80;
exam1 = 90;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC109:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 80;
hw3 = 80;
exam1 = 100;
exam2 = 90;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC110:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 0;
hw2 = 90;
hw3 = 90;
exam1 = 0;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC111:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 10;
hw2 = 90;
hw3 = 90;
exam1 = 10;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC112:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 20;
hw2 = 90;
hw3 = 90;
exam1 = 20;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC113:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 30;
hw2 = 90;
hw3 = 90;
exam1 = 30;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC114:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 40;
hw2 = 90;
hw3 = 90;
exam1 = 40;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC115:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 50;
hw2 = 90;
hw3 = 90;
exam1 = 50;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC116:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 60;
hw2 = 90;
hw3 = 90;
exam1 = 60;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC117:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 70;
hw2 = 90;
hw3 = 90;
exam1 = 70;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC118:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 80;
hw2 = 90;
hw3 = 90;
exam1 = 80;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC119:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 90;
hw2 = 90;
hw3 = 90;
exam1 = 90;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC120:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);

hw1 = 100;
hw2 = 90;
hw3 = 90;
exam1 = 100;
exam2 = 100;

hwGrade = cHW.computeHW(hw1, hw2, hw3);
examGrade = cEG.computeExams(exam1, exam2);
finalGrade = cFE.getFinalGrade(hwGrade, examGrade);
finalLetterGrade = cFLG.getFinalLetterGrade(finalGrade);

console.log("TC121:");
console.log("Homework: " + hwGrade);
console.log("Exam: " + examGrade);
console.log("Final Grade: " + finalGrade);
console.log("Final Letter Grade: " + finalLetterGrade);