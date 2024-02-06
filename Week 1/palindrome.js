/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();        /* ^(caret signifies negation of character class)   
                                                                'i' is for case-insensitivity and 
                                                                 g (global) flag symbolises that it matches all occurences in string */
  reverseStr = str.split('').reverse().join('');
  return str === reverseStr
}
  
module.exports = isPalindrome;