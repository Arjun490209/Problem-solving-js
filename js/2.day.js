//* 11. Number ka factorial nikalo
// let num = 5;
// let fact = 1;
// for (let i = num; i > 0; i--) {
//   fact *= i;
// }
// console.log(fact);

// * 12.Check karo number prime hai ya nahi.
// ? first method
// let num = 13;
// let prime = true;
// for (let i = 2; i <= Math.floor(num / 2); i++) {
//   if (num % i === 0) {
//     prime = false;
//     break;
//   }
// }
// console.log(prime);
// ? second method
// function isPrime(n) {
//   if (n <= 0 || n==1) return false;
//   if (n === 2) return true;
//   if (n % 2 === 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
//     if (n % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(9));

// * 13. First N natural numbers ka sum nikalo.
// ? first method
// let num = 10;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);
// * second method
// let num = 10;
// let sum = 0;
// for (let i = 1; i <= num; i++) {
//   sum = (num * (num + 1)) / 2;
// }
// console.log(sum);

// * 14. Array mein element exist karta hai ya nahi.
// let arr = [1, 3, 4, "arj", "pra", "ram"];
// let input = "arj";
// let exist = true;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === input) {
//     exist = true;
//     break;
//   }
//   exist = false;
// }
// console.log(exist);

// * 15. Celsius ko Fahrenheit mein convert karo.
// const C = 16;
// const F = C * (9 / 5) + 32;
// console.log(F);

// * 16 Fibonacci series print karo.
// let n = 10;
// let n1 = 0;
// let n2 = 1;
// let count = 0;
// if (n < 0) {
//   console.log("Enter a positive Number");
// } else if (n === 1) {
//   console.log("Fibonacci series " + n + " :", n1);
// } else {
//   console.log("Fibonacci series " + n + " :");
//   for (let i = 0; i < n; i++) {
//     console.log(n1);
//     let nth = n1 + n2;
//     n1 = n2;
//     n2 = nth;
//     count += 1;
//   }
// }
// console.log(count);

// * 17. Array se duplicates remove karo
// let arr = [1, 2, 3, 4, 3, 2, 4, 6, 7, 8, 9, 8, 7, 10];
// let uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);

// * 18. Palindrome string check karo.
// let str = "MALAYALAM";
// let Palindrome = false;
// for (let i = 0; i < str.length/2; i++) {
//   if (str[i] === str[str.length - 1 - i]) {
//     Palindrome = true;
//   } else {
//     Palindrome = false;
//     break;
//   }
// }
// console.log(Palindrome);

// * 19. Array ko sort karo (without sort()).
// let arr = [3, 2, 5, 7, 8, 10, 11, 6];

// function customSort(arr) {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(customSort(arr));

// * 20. Array ka second largest element find karo.

// let arr = [3, 2, 5, 7, 8, 10, 11, 6];

// function getSecondLargest(arr) {
//   let max1 = -Infinity;
//   let max2 = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max1) {
//       max2 = max1;
//       max1 = arr[i];
//     } else if (arr[i] > max2 && arr[i] !== max1) {
//       max2 = arr[i];
//     }
//   }

//   return max2;
// }

// console.log(getSecondLargest(arr));
