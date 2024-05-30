function delay(n) {
  return new Promise((resolve) => setInterval(resolve, n * 1000));
}
const n = 2;

delay(n).then(() => console.log(`${n} seconds have passed`));