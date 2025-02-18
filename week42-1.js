/*
    Hi.
    This is a set of practice exercises.
    The purpose is to focus on a few things at a time.
    You do this by writing your answer after a task is given (see the example).

    DO NOT change any code that is provided unless the task specifically says so.
*/

/* -----------------------------------------------------------------------------
    Task: Example
    Write the code to print all the names in the list, one name per line
*/
console.log("Task: Example");
const people = ["Tony", "Christian", "Håkon"]

for (let index = 0; index < people.length; index++) {
    let person = people[index];
    console.log(person);
}

/* -----------------------------------------------------------------------------
    Task: A
    Create a function that returns an array of length m-n, 
    n is the min value. 
    m is the max value. 
    if n = 5 and m is 10 the returned array sholuld be [5,6,7,8,9]
    Use loops and arrays to achive the goal. 
*/
console.log("Task: A");

function arrayLength(n, m) {
    let array = [];
    for (let i = n; i < m; i++) {
        array.push(i);
    }
    return array;
}

console.log(arrayLength(5, 10));


/* -----------------------------------------------------------------------------
    Task: B
    Create two arrays using your function from task a.
    first array n = 5, m = 11
    second array n = 8, m = 23
    
    Create a function that combines the two arrays into one, but no duplicate values. 
    Use for loops
*/
console.log("Task: B");
let array1 = arrayLength(5, 11);
console.log(arrayLength(5, 11));
let array2 = arrayLength(8, 23);
console.log(arrayLength(8, 23));

function combineArrays(arr1, arr2) {
    let combinedArray = arr1;
    let uniqueArray = [];

    for (let i = 0; i < arr2.length; i++) {
        combinedArray.push(arr2[i])
    }

    for (let i = 0; i < combinedArray.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (combinedArray[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }

        if (!isDuplicate) {
            uniqueArray.push(combinedArray[i]);
        }
    }

    return uniqueArray;

}

console.log(combineArrays(array1, array2));

/* -----------------------------------------------------------------------------
    Task: C
    Following you will find an alphabet a encrypted text and a shift value. 
    The message is encrypted using a cesar cipher https://en.wikipedia.org/wiki/Caesar_cipher 
    Create a function that 
    - Takes three parameters: message, alphabet and shift 
    - Creates the key based on the alphabet and the shift value. 
    - decrypts and returns the message.
    Use arrays and for loops. 
*/
console.log("Task: C");
const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
const message = "ckrr jutk";
let shift = 6;

function cipher(alphabet, shift, message) {
    let decryptedMessage = " ";

    for (let i = 0; i < message.length; i++) {
        const char = message[i];

        if (char === " ") {
            decryptedMessage += " ";
            continue;
        }

        const currentIndex = alphabet.indexOf(char);

        const newIndex = (currentIndex - shift + alphabet.length) % alphabet.length;

        decryptedMessage += alphabet[newIndex];
    }

    return decryptedMessage;

}

console.log(cipher(ALPHABET, shift, message));

/* -----------------------------------------------------------------------------
    Task: D

    You are given a list of numbers.
    Write a function that takes the list and a target sum as input parameters
    The function is then to figure out what two numbers in the list that summed makes the provided sum.

    Example:
    [3,2,6,9]
    target 9
    -> [3,6]

*/
console.log("Task: D");

const numbers = [1, 23, 14, 56, 42, 33, 0, 3];
const target = 36;

function whichTwoNumbers(array, target) {
    let answer = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                answer = [array[i], array[j]];
            }
        }
    }
    return answer;
}

console.log(whichTwoNumbers(numbers, target));




/* -----------------------------------------------------------------------------
    Task: E
    Create a function that takes a number as input and returns the number of digits in that number. 
    123 -> 3
    2 -> 1
    42693 -> 5
*/
console.log("Task: E");

const NUMBER_1 = 123;
const NUMBER_2 = 2;
const NUMBER_3 = 42693;


function numberOfDigits(number) {
    let numberAsList = [];
    let amountOfDigits = 0;

    numberAsList = number.toString().split("").map(Number);
    amountOfDigits = numberAsList.length;

    return amountOfDigits;
}

console.log(numberOfDigits(NUMBER_1));
console.log(numberOfDigits(NUMBER_2));
console.log(numberOfDigits(NUMBER_3));
