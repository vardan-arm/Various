'use strict'
const unsortedArray = [12, 3, 1, -3, 0, -20, 6, 10];

/*
// Selection sort
function selectionSort(arr) {
    const sortedArray = [...arr],
        limit = arr.length;
    let minIndex = 0,
        temp;

    for(let i = 0; i < limit; i++) {
        minIndex = i;
        for(let j = i + 1; j < limit; j++) {
            if(sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }
        if(i !== minIndex) {
            temp = sortedArray[minIndex];
            sortedArray[minIndex] = sortedArray[i];
            sortedArray[i] = temp;
        }
    }

    return sortedArray;
}
*/

// Merge sort
function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }

    const center = Math.floor(arr.length / 2);
    const left = arr.slice(0, center);
    const right = arr.slice(center);

    return merger(mergeSort(left), mergeSort(right));
}

function merger(left, right) {
    const result = [];

    while(left.length > 0 && right.length > 0) {
        if(left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    return [...result, ...left, ...right];
}

console.log(mergeSort(unsortedArray));
// console.log('result:', selectionSort(unsortedArray));
console.log('original:', unsortedArray);