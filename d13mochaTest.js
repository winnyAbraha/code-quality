let assert = require('assert');
const functionModule = require("./codeQuality.js");
const computeSalesCommission = functionModule.computeSalesCommission
const isVowel = functionModule.isVowel
const balanceOfSavingAccount = functionModule.balanceOfSavingAccount
const calcDownpayment = functionModule.calcDownpayment
const convertFahrenheit = functionModule.convertFahrenheit
const calcDistance = functionModule.calcDistance


//number 1

describe('Is Vowel', function () {
    it("e is not vowel", function () {
        assert.equal(isVowel("e"), true);
    });

    it("i is not vowel", function () {
        assert.equal(isVowel("i"), true);
    });

    it("o is not vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is not vowel", function () {
        assert.equal(isVowel("u"), true);
    });

    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });

    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
})


// number 2

describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 6);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 70);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 105);
    });
});


// number 3

describe("test for interst per time", function () {
    it("tests initamount, annual rate and per time", function () {
        assert.strictEqual(balanceOfSavingAccount(100, 10, 1),
            110.47130674412968);

    });
    it("tests initamount, annual rate and per time", function () {
        assert.strictEqual(balanceOfSavingAccount(10000, 5, 10),
            16470.0949769028);
    });
});


// number 4
// A

describe("test for downpayment", function () {
    it("cost ", function () {
        assert.strictEqual(calcDownpayment(40000), 2000);
    });
    it("cost", function () {
        assert.strictEqual(calcDownpayment(50000), 2500);
    });
});


// B

describe(" convert to fahrenheit", function () {
    it("celsius ", function () {
        assert.strictEqual(convertFahrenheit(100), 37.77777777777778);
    });
});


// C

describe(" calcuate distance ", function () {
    it(" distance between x and y cordinates ", function () {
        assert.strictEqual(calcDistance(0, 0, 5, 5), 7.0710678118654755);
    });
});

