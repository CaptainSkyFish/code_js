/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
    if (str1.length !== str2.length)
        return false;
    
    sortedStr1 = str1.split('').sort().join('');
    sortedStr2 = str2.split('').sort().join('');

    return sortedStr1===sortedStr2;
}

//alternative X
// function isAnagram(str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     const alphabetCount1 = calcAlphabets(str1);
//     const alphabetCount2 = calcAlphabets(str2);
//     for (let i = 0; i < 26; i++) {
//         if (alphabetCount1[i] !== alphabetCount2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// function calcAlphabets(str) {
//     const arr = new Array(26).fill(0);
//     for (let i = 0; i < str.length; i++) {
//         const charCode = str.charCodeAt(i);
//         if (charCode >= 65 && charCode <= 90) {
//             arr[charCode - 65]++;
//         }
//     }
//     return arr;
// }
module.exports = isAnagram;