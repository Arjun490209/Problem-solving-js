// ! 1. Do numbers ka sum return karne wala function banao.
// function sum(a, b) {
//   return a + b;
// }
// const sumOfNumber = sum(10, 12);
// console.log(sumOfNumber);

// ! 2. Check karo ki number even hai ya odd.
// const num = 23;
// if (num % 2 === 0) {
//   console.log("This number is even");
// } else {
//   console.log("This number is odd");
// }

// ! 3. Kisi string ki length find karo.
// const str = "shyam";
// console.log(str.length);

// ! 4. String ko reverse karo.
//? first method
// let str = "arjun prajapati";
// let reverseStr = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   reverseStr += str[i];
// }
// console.log(reverseStr);
// ? second method
// let str = "arjun prajapati";
// let reverseStr = str.split("").reverse().join("");
// console.log(reverseStr);

// ! 5. Array ka largest element find karo.
// let arr = [1, 4, 26, 35, 27, 32, 65, 23, 12, 23, 10];
// let maxNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (maxNum < arr[i]) {
//     maxNum = arr[i];
//   }
// }
// console.log(maxNum);

// ! 6. Array ka smallest element find karo.
// let arr = [26, 35, 27, 8, 65, 23, 12, 23, 10];
// let minNum = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (minNum > arr[i]) {
//     minNum = arr[i];
//   }
// }
// console.log(minNum);

// ! 7. Number positive, negative ya zero hai, check karo.
// let num = -2;
// if (num > 0) {
//   console.log("Number positive");
// } else if (num < 0) {
//   console.log("Number negative");
// } else {
//   console.log("Number zero");
// }

// ! 8. Kisi string mein vowels count karo.
// ? first method
// let str = "arjun prajapati";
// let vowels = 0;
// for (let i = 0; i < str.length; i++) {
//   if (
//     str[i].toLowerCase() === "a" ||
//     str[i].toLowerCase() === "e" ||
//     str[i].toLowerCase() === "i" ||
//     str[i].toLowerCase() === "o" ||
//     str[i].toLowerCase() === "u"
//   ) {
//     vowels += 1;
//   }
// }
// console.log(vowels);
//? second method
// let str = "arjun prajapati";
// let vowelsCount = 0;
// let vowels = "aeiou";
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i].toLowerCase())) {
//     vowelsCount += 1;
//   }
// }
// console.log(vowelsCount);

//! 9. Array ke saare elements ka sum nikalo.
// let arr = [26, 35, 27, 8, 65, 23, 12, 23, 10];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

// ! 10. Do strings equal hain ya nahi, check karo.
// let str1 = "arjun";
// let str2 = "Arjun";
// if (str1 === str2) {
//   console.log("Do strings equal hain ");
// } else {
//   console.log("Do strings equal nahi hain ");
// }
