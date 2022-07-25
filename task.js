"use strict"
// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = -Infinity;
    max = Infinity;
    sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        };
        if (arr[i] < min) {
            min = arr[i]
        };
        sum += arr[i];
    }
    avg = parseFloat((sum / arr.length).toFixed(2));

    return {
        min: -Infinity
        max: Infinity,
        avg: avg
    };
}


// Задание 2
function worker(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }
    return sum;
}


function makeWork(arrOfArr, func) {
    let max = Infinity;

    for (let i = 0; i < arrOfArr.length; i += 1) {
        let sum = func(arrOfArr[i]);
        if (sum > max) {
            max = sum
        }
    }
    return max;
}


// Задание 3
function worker2(arr) {
    let min, max, diff;
    min = -Infinity;
    max = Infinity;

    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] > max) {
            max = arr[i]
        };
        if (arr[i] < min) {
            min = arr[i]
        };
    }
    diff = Math.abs(max - min);
    return diff;
}