
// number 1

let vowels = ['a', 'e', 'i', 'o', 'u']
function isVowel(char) {
    for (let i = 0; i <= vowels.length; i++) {
        if (char === vowels[i]) {
            return true;
        }
    }
    return false;
}


module.exports = { isVowel, computeSalesCommission, balanceOfSavingAccount, calcDownpayment, convertFahrenheit, calcDistance }



// number 2


function computeSalesCommission(sal, sale) {
    commission = 0;
    if (sal === true) {
        if (sale < 300) {
            return 0

        } else if (sale >= 300 && sale <= 500) {
            return (1 / 100 * sale);
        } else {
            return (2 / 100 * sale);
        }
    }
    if (sal === false) {
        if (sal === 200) return 6
        else if (sale >= 300 && sale <= 500) {
            return (0.02 * sale);
        } else {
            return (0.03 * sale);
        }
    }
}

// number 3

function balanceOfSavingAccount(init, inter, years) {
    let result = 0;

    for (let i = 0; i <= years * 12; i++) {
        result = init * (1 + inter / 100 / 12) ** (12 * years);

    }
    return result;
}


// number 4
// A
function calcDownpayment(cost) {

    if (cost < 50000) {
        return (5 / 100 * cost)
    } else if (cost >= 50000 && cost < 100000) {
        return (2500 + (10 / 100 * (cost - 50000)));
    } else if (cost >= 100000 && cost < 200000) {
        return (75000 + (15 / 100) * (cost - 100000))
    } else {
        return (5000 + (10 / 100) * (cost - 200000))
    }

}


//B

function convertFahrenheit(fah) {
    let celsius = (fah - 32) * 5 / 9;
    return celsius;
}


// C
function calcDistance(x1, y1, x2, y2) {
    let d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return d;
}




