const expect = require("chai").expect;
const { describe, assert, it } = require("mocha");
const mongoose = require('mongoose');
const app = require("../main");
const request = require("supertest");
const path = require("path");


mongoose.connect('mongodb://localhost/grade');

mongoose.connection.once('open', function() {
    console.log("Connected to grades db");
}).on('error', function(error){
    console.log("Connection error", error);
});

describe("Test saveGrades. Function returns -1 if input is out of bounds.", function() {
    it("Grades of (100,100,100,100,100) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","100")
            .field("hw2","100")
            .field("hw3","100")
            .field("exam1","100")
            .field("exam2","100")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (0,0,0,0,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","0")
            .field("hw2","0")
            .field("hw3","0")
            .field("exam1","0")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (100,0,0,0,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","100")
            .field("hw2","0")
            .field("hw3","0")
            .field("exam1","0")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (101,0,0,0,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","101")
            .field("hw2","0")
            .field("hw3","0")
            .field("exam1","0")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (0,100,0,100,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","0")
            .field("hw2","100")
            .field("hw3","0")
            .field("exam1","100")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });


    it("Grades of (0,0,100,0,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","0")
            .field("hw2","0")
            .field("hw3","100")
            .field("exam1","0")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (0,0,101,0,0) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","0")
            .field("hw2","0")
            .field("hw3","101")
            .field("exam1","0")
            .field("exam2","0")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (87,48,93,94,78) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","87")
            .field("hw2","48")
            .field("hw3","93")
            .field("exam1","94")
            .field("exam2","78")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (13,65,84,12,98) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","13")
            .field("hw2","65")
            .field("hw3","84")
            .field("exam1","12")
            .field("exam2","98")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (74,27,55,64,24) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","74")
            .field("hw2","27")
            .field("hw3","55")
            .field("exam1","64")
            .field("exam2","24")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (12,36,15,29,20) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","12")
            .field("hw2","36")
            .field("hw3","15")
            .field("exam1","29")
            .field("exam2","20")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (66,63,86,56,74) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","66")
            .field("hw2","63")
            .field("hw3","86")
            .field("exam1","56")
            .field("exam2","74")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (78,55,81,56,91) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","78")
            .field("hw2","55")
            .field("hw3","81")
            .field("exam1","56")
            .field("exam2","91")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (87,33,-13,100,10) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","87")
            .field("hw2","33")
            .field("hw3","-13")
            .field("exam1","100")
            .field("exam2","10")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (80,88,93,84,82) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","80")
            .field("hw2","88")
            .field("hw3","93")
            .field("exam1","84")
            .field("exam2","82")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (64,69,53,79,34) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","64")
            .field("hw2","69")
            .field("hw3","53")
            .field("exam1","79")
            .field("exam2","34")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (55,52,49,90,29) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","55")
            .field("hw2","52")
            .field("hw3","49")
            .field("exam1","90")
            .field("exam2","29")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (30,44,30,45,67) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","30")
            .field("hw2","44")
            .field("hw3","30")
            .field("exam1","45")
            .field("exam2","67")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (33,-65,34,-10,23) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","33")
            .field("hw2","-65")
            .field("hw3","34")
            .field("exam1","-10")
            .field("exam2","23")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (27,19,24,63,49) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","27")
            .field("hw2","19")
            .field("hw3","24")
            .field("exam1","63")
            .field("exam2","49")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (88,79,89,98,99) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","88")
            .field("hw2","79")
            .field("hw3","89")
            .field("exam1","98")
            .field("exam2","99")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (89,81,76,89,76) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","89")
            .field("hw2","81")
            .field("hw3","76")
            .field("exam1","89")
            .field("exam2","76")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (91,85,90,92,78) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","91")
            .field("hw2","85")
            .field("hw3","90")
            .field("exam1","92")
            .field("exam2","78")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (-97,98,91,100,90) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","-97")
            .field("hw2","98")
            .field("hw3","91")
            .field("exam1","100")
            .field("exam2","90")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (15,22,19,33,44) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","15")
            .field("hw2","22")
            .field("hw3","19")
            .field("exam1","33")
            .field("exam2","44")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (14,9,6,3,2) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","14")
            .field("hw2","9")
            .field("hw3","6")
            .field("exam1","3")
            .field("exam2","2")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (11,15,16,12,14) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","11")
            .field("hw2","15")
            .field("hw3","16")
            .field("exam1","12")
            .field("exam2","14")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (99,94,94,74,84) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","99")
            .field("hw2","94")
            .field("hw3","94")
            .field("exam1","74")
            .field("exam2","84")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });

    it("Grades of (101,153,999,333,456) successfully saved to database", function(done) {
        request(app).post("/grade")
            .field("hw1","101")
            .field("hw2","153")
            .field("hw3","999")
            .field("exam1","333")
            .field("exam2","456")
            .expect(200)
            .end(function(err,res) {
                if (err) {
                    throw err;
                }
            done();
        });
    });
});
