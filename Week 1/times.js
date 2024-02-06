/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const then = performance.now();
    let i = 0, sum = 0;
    while(i<=n){
        sum += ++i;
    }
    const diff = performance.now() - then;          //returns in milliseconds
    console.log(diff/1000);
}

calculateTime(1000000000);