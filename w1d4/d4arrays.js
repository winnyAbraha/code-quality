
module.exports = {sum,multiply,maxOfThree,findLongestWord,reverseArray,reverseArrayInPlace,scoreExams};


 //number 1

/**
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a,b,c
 */

function maxOfThree(a, b, c) {

    if (a >= b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c
    }
}
console.log(maxOfThree(10, 4, 3));


//number 2

/**
 * @param {Array} arr of numbers
 * @returns {number} sum of the numbers in arr
 */

function sum(arr1, arr2) {
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i] ;


    }
    return sum;
}
console.log(sum([1, 2, 3]))

/**
 
 * @param {Array} arr of numbers
 * @returns {number} sum of the numbers in arr
 */

function multiply(arr1) {
    let product = 1;
    for (let i = 0; i < arr1.length; i++) {
        product *= arr1[i]
    }

    return product;
}
console.log(multiply([1, 2, 3, 4]));

//number 3

/**
 * @param {Array} arr of strings
 * @returns{number} length of longest srting in arr
 */


function findLongestWord(arr) {
    let largest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > largest.length) {
            largest = arr[i]

        }
    }
    return largest.length;

}
console.log(findLongestWord(["hello", "say", "worlds"]));

//number 4

/**
 *
 * @param {Array} arr
 * @returns {Array} arr in reverse
 */

function reverseArray(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArray([1, 2, 3]));


function reverseArrayInPlace(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr;

}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

//number 5

/**
 *
 * @param {Array} arr of arrays
 * @param {Array} correctAnswers
 * @returns {Array} count of the correct answers
 */

function scoreExams(arr1,arr4){
    
    let newArr = []
    for(let i = 0; i<arr1.length; i++ ){
        let count = 0;
        for(let j =0; j<arr1[i].length; j++){
            if (arr1[i][j]=== arr4[j]){
                count++
            
            }

        }
        newArr.push(count);
    }
    return newArr;
}
console.log(scoreExams([[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]], [3, 1, 2,4]));

