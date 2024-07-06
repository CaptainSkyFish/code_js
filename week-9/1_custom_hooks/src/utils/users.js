export function generateRandomWords(numWords) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const words = [];

  for (let i = 0; i < numWords; i++) {
    const wordLength = Math.floor(Math.random() * 10) + 1; // Random length between 1 and 10
    let word = "";

    for (let j = 0; j < wordLength; j++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      word += alphabet[randomIndex];
    }

    words.push(word);
  }

  return words;
}
