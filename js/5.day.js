// * 41. Custom implementation of map() banao.
// let arr = [1, 2, 3];

// function mapCopy(arr) {
//   let copyArr = [...arr];
//   for (let i = 0; i < copyArr.length; i++) {
//     copyArr[i] = copyArr[i] * 2;
//   }
//   return copyArr;
// }
// console.log(mapCopy(arr));

// * 42. Custom implementation of filter() banao.
// let arr = [10, 12, 15, 20, 13];

// function mapCopy(arr) {
//   let copyArr = [...arr];
//   let result = [];
//   for (let i = 0; i < copyArr.length; i++) {
//     if (copyArr[i] < 15) {
//       result.push(copyArr[i]);
//     }
//   }
//   return result;
// }
// console.log(mapCopy(arr));

// * 43. Custom implementation of reduce() banao.
// let arr = [1, 2, 3];

// function mapCopy(arr) {
//   let copyArr = [...arr];
//   let result = 0;
//   for (let i = 0; i < copyArr.length; i++) {
//     result += copyArr[i];
//   }
//   return result;
// }
// console.log(mapCopy(arr));

// * 44. Deep copy function banao object ke liye.
// function deepCopy(obj) {
//   // Agar object nahi hai ya null hai to wahi value return karo
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // Array aur Object dono handle karo
//   let copy = Array.isArray(obj) ? [] : {};

//   // Har property ko recursively copy karo
//   for (let key in obj) {
//     copy[key] = deepCopy(obj[key]);
//   }
//   return copy;
// }

// let person = {
//   name: "Arjun",
//   age: 21,
//   address: {
//     city: "Lucknow",
//     state: "UP",
//   },
// };

// let newPerson = deepCopy(person);

// newPerson.address.city = "Delhi";

// console.log(person);
// console.log(newPerson);

// * 45. Recursive function se array flatten karo.
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

// console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));

// * 46. Debounce function implement karo.
// * 47. Throttle function implement karo.
// * 48. Do objects deep equal hain ya nahi, check karo.
// * 49. LRU Cache implement karo.
// * 50. Promise-based function likho jo multiple async tasks ko sequence mein execute kare.
