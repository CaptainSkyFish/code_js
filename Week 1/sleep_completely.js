/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

async function main() {
  console.log("Sleeping for 7 seconds...");
  await sleep(7 * 1000);
  console.log("Thread continues after 7 seconds.");
}
main();

console.log("after main");
