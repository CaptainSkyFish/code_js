/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          console.log('Promise 1 resolved after 1 second');
          resolve('Promise 1');
        }, 1000);
      });
}

function waitTwoSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          console.log('Promise 2 resolved after 2 seconds');
          resolve('Promise 2');
        }, 2000);
      });
}

function waitThreeSecond() {
    return new Promise(resolve => {
        setTimeout(() => {
          console.log('Promise 3 resolved after 3 seconds');
          resolve('Promise 3');
        }, 3000);
      });
}

function calculateTime() {
    const startTime = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
    .then(values => {
        const endTime = Date.now();
        const totalTime = endTime - startTime;
        console.log(`All promises resolved in ${totalTime} milliseconds`);
        console.log('Resolved values:', values);
        })
    .catch(error => {
        console.error('Error:', error);
    });
}
      
waitForAllPromises();
      