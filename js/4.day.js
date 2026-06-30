// todo 31. Nested array flatten karo.
// function flattenArray(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       result = result.concat(flattenArray(item));
//     } else {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(flattenArray([1, 2, [3, 4], [5, [6, 7]]]));

// todo 32. Array ke unique elements return karo (without Set).
// function uniqueArray(arr) {
//   let result = [];

//   for (let item of arr) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(uniqueArray([1, 2, 2, 3, 4, 4, 5]));

// todo 33. First non-repeating character find karo.
// function firstNonRepeating(str) {
//   for (let char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) {
//       return char;
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeating("swiss"));

// todo 34. Array ke union elements find karo.
// function unionArray(arr1, arr2) {
//   let result = [];
//   for (let item of arr1) {
//     if (!result.includes(item)) {
//       result.push(item);
//     }

//     for (let item of arr2) {
//       if (!result.includes(item)) {
//         result.push(item);
//       }
//     }
//   }
//   return result;
// }
// console.log(unionArray([1, 2, 3], [3, 4, 5]));

// todo 35. Armstrong number check karo.
// function isArmstrong(num) {
//   let str = num.toString();
//   let power = str.length;
//   let sum = 0;

//   for (let item of str) {
//     sum += Number(item) ** power;
//   }
//   return sum === num;
// }
// console.log(isArmstrong(153));

// todo 36. Har word ka first letter capitalize karo.
//   ?first loop solve
// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let result = [];
//   for (let word of words) {
//     result.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return result.join(" ");
// }
//   ? second loop solve
// function capitalizeWords(str) {
//   let words = str.split(" ");
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     result.push(words[i][0].toUpperCase() + words[i].slice(1));
//   }
//   return result.join(" ");
// }
// console.log(capitalizeWords("hello world javascript"));

// todo 37. Array ko chunks mein divide karo.
// function chunkArray(arr, size) {
//   let result = [];

//   for (let i = 0; i < arr.length; i += size) {
//     result.push(arr.slice(i, i + size));
//   }

//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

// todo 38. Missing number find karo (1 se N tak).
// function findMissing(arr, num) {
//   let total = (num * (num + 1)) / 2;
//   let sum = 0;
//   for (let n of arr) {
//     sum += n;
//   }
//   return total - sum;
// }
// console.log(findMissing([1, 2, 3, 5], 5));

// todo 39. Balanced parentheses check karo.
// function isBalanced(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char === "(") {
//       count += 1;
//     }
//   }

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ")") {
//       count--;
//     }
//   }
//   return count === 0;
// }
// console.log(isBalanced("(())"));
// console.log(isBalanced("(()("));
// ?chat gpt solve
// function isBalanced(str) {
//   let count = 0;

//   for (let char of str) {
//     if (char === "(") count++;
//     else if (char === ")") count--;

//     if (count < 0) return false;
//   }

//   return count === 0;
// }

// todo 40. String compression (aaabbcc → a3b2c2).
// function compressString(str) {
//   let result = "";
//   let count = 1;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++;
//     } else {
//       result += str[i] + count;
//       count = 1;
//     }
//   }
//   return result;
// }
// console.log(compressString("aaabbcc"));
