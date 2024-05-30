/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait(seconds) {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(`Resolved after ${seconds} second(s)`);
        resolve(seconds);
      }, seconds * 1000);
    });
  }
  
  function sequentialExecution() {
    const startTime = new Date();
  
    // Call the functions sequentially
    wait(1)
      .then(() => wait(2))
      .then(() => wait(3))
      .then(() => {
        const endTime = new Date();
        const totalTime = (endTime - startTime) / 1000; // in seconds
        console.log(`Total time taken: ${totalTime} seconds`);
      });
  }
  
  // Call the sequentialExecution function
  sequentialExecution();
  