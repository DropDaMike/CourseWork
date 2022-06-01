'use strict';

const { computeHW, computeExams, getFinalGrade, getFinalLetterGrade } = require("./controller");

let testCases = [
  {
    hw1: 10,
    hw2: 0,
    hw3: 0,
    exam1: 10,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 0,
    hw3: 0,
    exam1: 20,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 0,
    hw3: 0,
    exam1: 30,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 0,
    hw3: 0,
    exam1: 40,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 0,
    hw3: 0,
    exam1: 50,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 0,
    hw3: 0,
    exam1: 60,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 0,
    hw3: 0,
    exam1: 70,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 0,
    hw3: 0,
    exam1: 80,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 0,
    hw3: 0,
    exam1: 90,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 0,
    hw3: 0,
    exam1: 100,
    exam2: 0,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 10,
    hw3: 0,
    exam1: 0,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 10,
    hw3: 0,
    exam1: 10,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 10,
    hw3: 0,
    exam1: 20,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 10,
    hw3: 0,
    exam1: 30,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 10,
    hw3: 0,
    exam1: 40,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 10,
    hw3: 0,
    exam1: 50,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 10,
    hw3: 0,
    exam1: 60,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 10,
    hw3: 0,
    exam1: 70,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 10,
    hw3: 0,
    exam1: 80,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 10,
    hw3: 0,
    exam1: 90,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 10,
    hw3: 0,
    exam1: 100,
    exam2: 10,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 10,
    hw3: 10,
    exam1: 0,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 10,
    hw3: 10,
    exam1: 10,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 10,
    hw3: 10,
    exam1: 20,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 10,
    hw3: 10,
    exam1: 30,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 10,
    hw3: 10,
    exam1: 40,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 10,
    hw3: 10,
    exam1: 50,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 10,
    hw3: 10,
    exam1: 60,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 10,
    hw3: 10,
    exam1: 70,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 10,
    hw3: 10,
    exam1: 80,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 10,
    hw3: 10,
    exam1: 90,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 10,
    hw3: 10,
    exam1: 100,
    exam2: 20,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 20,
    hw3: 20,
    exam1: 0,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 20,
    hw3: 20,
    exam1: 10,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 20,
    hw3: 20,
    exam1: 20,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 20,
    hw3: 20,
    exam1: 30,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 20,
    hw3: 20,
    exam1: 40,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 20,
    hw3: 20,
    exam1: 50,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 20,
    hw3: 20,
    exam1: 60,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 20,
    hw3: 20,
    exam1: 70,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 20,
    hw3: 20,
    exam1: 80,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 20,
    hw3: 20,
    exam1: 90,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 20,
    hw3: 20,
    exam1: 100,
    exam2: 30,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 30,
    hw3: 30,
    exam1: 0,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 30,
    hw3: 30,
    exam1: 10,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 30,
    hw3: 30,
    exam1: 20,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 30,
    hw3: 30,
    exam1: 30,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 30,
    hw3: 30,
    exam1: 40,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 30,
    hw3: 30,
    exam1: 50,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 30,
    hw3: 30,
    exam1: 60,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 30,
    hw3: 30,
    exam1: 70,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 30,
    hw3: 30,
    exam1: 80,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 30,
    hw3: 30,
    exam1: 90,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 30,
    hw3: 30,
    exam1: 100,
    exam2: 40,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 40,
    hw3: 40,
    exam1: 0,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 40,
    hw3: 40,
    exam1: 10,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 40,
    hw3: 40,
    exam1: 20,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 40,
    hw3: 40,
    exam1: 30,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 40,
    hw3: 40,
    exam1: 40,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 40,
    hw3: 40,
    exam1: 50,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 40,
    hw3: 40,
    exam1: 60,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 40,
    hw3: 40,
    exam1: 70,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 40,
    hw3: 40,
    exam1: 80,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 40,
    hw3: 40,
    exam1: 90,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 40,
    hw3: 40,
    exam1: 100,
    exam2: 50,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 50,
    hw3: 50,
    exam1: 0,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 50,
    hw3: 50,
    exam1: 10,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 50,
    hw3: 50,
    exam1: 20,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 50,
    hw3: 50,
    exam1: 30,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 50,
    hw3: 50,
    exam1: 40,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 50,
    hw3: 50,
    exam1: 50,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 50,
    hw3: 50,
    exam1: 60,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 50,
    hw3: 50,
    exam1: 70,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 50,
    hw3: 50,
    exam1: 80,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 50,
    hw3: 50,
    exam1: 90,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 50,
    hw3: 50,
    exam1: 100,
    exam2: 60,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 60,
    hw3: 60,
    exam1: 0,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 60,
    hw3: 60,
    exam1: 10,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 60,
    hw3: 60,
    exam1: 20,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 60,
    hw3: 60,
    exam1: 30,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 60,
    hw3: 60,
    exam1: 40,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 60,
    hw3: 60,
    exam1: 50,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 60,
    hw3: 60,
    exam1: 60,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 60,
    hw3: 60,
    exam1: 70,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 60,
    hw3: 60,
    exam1: 80,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 60,
    hw3: 60,
    exam1: 90,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 60,
    hw3: 60,
    exam1: 100,
    exam2: 70,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 70,
    hw3: 70,
    exam1: 0,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 70,
    hw3: 70,
    exam1: 10,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 70,
    hw3: 70,
    exam1: 20,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 70,
    hw3: 70,
    exam1: 30,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 70,
    hw3: 70,
    exam1: 40,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 70,
    hw3: 70,
    exam1: 50,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 70,
    hw3: 70,
    exam1: 60,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 70,
    hw3: 70,
    exam1: 70,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 70,
    hw3: 70,
    exam1: 80,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 70,
    hw3: 70,
    exam1: 90,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 70,
    hw3: 70,
    exam1: 100,
    exam2: 80,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 80,
    hw3: 80,
    exam1: 0,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 80,
    hw3: 80,
    exam1: 10,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 80,
    hw3: 80,
    exam1: 20,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 80,
    hw3: 80,
    exam1: 30,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 80,
    hw3: 80,
    exam1: 40,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 80,
    hw3: 80,
    exam1: 50,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 80,
    hw3: 80,
    exam1: 60,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 80,
    hw3: 80,
    exam1: 70,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 80,
    hw3: 80,
    exam1: 80,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 80,
    hw3: 80,
    exam1: 90,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 80,
    hw3: 80,
    exam1: 100,
    exam2: 90,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 0,
    hw2: 90,
    hw3: 90,
    exam1: 0,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 10,
    hw2: 90,
    hw3: 90,
    exam1: 10,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 20,
    hw2: 90,
    hw3: 90,
    exam1: 20,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 30,
    hw2: 90,
    hw3: 90,
    exam1: 30,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 40,
    hw2: 90,
    hw3: 90,
    exam1: 40,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 50,
    hw2: 90,
    hw3: 90,
    exam1: 50,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 60,
    hw2: 90,
    hw3: 90,
    exam1: 60,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 70,
    hw2: 90,
    hw3: 90,
    exam1: 70,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 80,
    hw2: 90,
    hw3: 90,
    exam1: 80,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 90,
    hw2: 90,
    hw3: 90,
    exam1: 90,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
  {
    hw1: 100,
    hw2: 90,
    hw3: 90,
    exam1: 100,
    exam2: 100,
    hwGrade: function () {
      return computeHW(this.hw1, this.hw2, this.hw3)
    },
    examGrade: function () {
      return computeExams(this.exam1, this.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(this.hwGrade(), this.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(this.finalGrade())
    }
  },
];

exports.showTestCases =   ( req, res ) => {
  res.render( 'displayTests', {
    allTestCases: testCases
  } );
};

exports.showTCForm = ( req, res ) => {
  res.render( 'addTest' );
};

exports.addTestCase = ( req, res ) => {
  var tc = {
    hw1: req.body.hw1,
    hw2: req.body.hw2,
    hw3: req.body.hw3,
    exam1: req.body.exam1,
    exam2: req.body.exam2,
    hwGrade: function () {
      return computeHW(tc.hw1, tc.hw2, tc.hw3)
    },
    examGrade: function () {
      return computeExams(tc.exam1, tc.exam2)
    },
    finalGrade: function () {
      return getFinalGrade(tc.hwGrade(), tc.examGrade())
    },
    letterGrade: function () {
      return getFinalLetterGrade(tc.finalGrade())
    }
  };
  testCases.push(tc);
  res.render( 'addTest' );
}