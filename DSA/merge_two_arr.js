// ! Using for loop
// let arr1 = [2, 34, 5, 6, 4, 22, 32, 12, 56];
// let arr2 = [3, 4, 8, 2, 43, 22, 12, 43];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }

// ! Using spread
// let arr1 = [2, 34, 5, 6, 4, 22, 32, 12, 56];
// let arr2 = [3, 4, 8, 2, 43, 22, 12, 43];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// ! using while loop
let arr1 = [2, 4, 7, 12, 15, 27, 39, 50];
let arr2 = [3, 5, 10, 13, 21];
let arr3 = [];
let a1 = 0;
let a2 = 0;
let a3 = 0;
while (a1 < arr1.length && a2 < arr2.length) {
  if (arr1[a1] < arr2[a2]) {
    arr3[a3] = arr1[a1];
    a1++;
  } else {
    arr3[a3] = arr2[a2];
    a2++;
  }
  a3++;
}

while (a1 < arr1.length) {
  arr3[a3] = arr1[a1];
  a1++;
  a3++;
}

console.log(arr3);
