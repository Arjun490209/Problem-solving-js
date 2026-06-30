// todo: 21. String mein sabse zyada baar aane wala character find karo.
// let str = "javascript";
// function maxStrChar(arr) {
//   let charMap = {};
//   let maxChar = "";
//   let maxCount = 0;

//   for (let char of arr) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > maxCount) {
//       maxCount = charMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }
// console.log(maxStrChar(str));

// todo: 22. Number ke digits ka sum nikalo.
// ? first method
// function sumOfDigits(num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// }
// console.log(sumOfDigits(12345));
// ?second method
// let num = 12345;
// let sum = num
//   .toString()
//   .split("")
//   .map(Number)
//   .reduce((a, b) => a + b, 0);
// console.log(sum);

// todo: 23. Number reverse karo.
// function reverseNumber(num) {
//   let reverse = "";
//   while (num > 0) {
//     reverse += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return Number(reverse);
// }
// console.log(reverseNumber(12345));

// todo: 24. Array mein even numbers count karo.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     evenCount += 1;
//   }
// }
// console.log(evenCount);

// todo: 25. Array mein odd numbers count karo.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let oddCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     oddCount += 1;
//   }
// }
// console.log(oddCount);

// todo: 26. String ke words count karo.
// ? my wrong
// let str = "javascript";
// console.log(str.length);
// ? solve
// let str = "I love JavaScript";
// let words = str.trim().split(" ");
// console.log(words.length);

// todo: 27. Array ka average nikalo.
// ? my wrong
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ave = 0;
// for (let i = 0; i < arr.length; i++) {
//   ave += arr[i];
// }
// console.log(ave / 2);
// ya
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ave = arr.length / 2;
// console.log(ave);

// ? chatgpt solve
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// let average = sum / arr.length;
// console.log(average);

// todo: 28. Do strings anagram hain ya nahi.
// ? my solve
// function anagram(s, t) {
//   if (s.length !== t.length) return false;
//   let map = {};
//   for (let char of s) {
//     map[char] = map[char] ? map[char] + 1 : 1;
//   }
//   for (let char of t) {
//     if (map[char]) {
//       map[char] -= 1;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(anagram("arjun", "rajun"));

// ? chatgpt solve
// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase().split("").sort().join("");
//   str2 = str2.toLowerCase().split("").sort().join("");
//   return str1 === str2;
// }
// console.log(isAnagram("listen", "silent"));

// todo: 29. Array ko left rotate karo.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let copy = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i + 1];
// }
// arr[arr.length - 1] = copy;
// console.log(arr);

// todo: 30. Array ke intersection elements find karo.
// let arr1 = [1, 2, 3, 4, 5, 6];
// let arr2 = [4, 5, 6, 3, 7, 8];
// let arr = [];
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] === arr2[j]) {
//       arr.push(arr1[i]);
//     }
//   }
// }
// console.log(arr);
// ? chatgpt solve
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [3, 4, 5, 6, 7];
// let result = arr1.filter((item) => arr2.includes(item));
// console.log(result);
