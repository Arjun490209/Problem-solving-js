// ! DSA
let arr = [2, 4, 7, 12, 15, 27, 39, 50];
let value = 13;
let position = 4;

for (let i = arr.length; i >= position; i--) {
  arr[i] = arr[i - 1];
  if (i === position) {
    arr[i] = value;
  }
}

console.log(arr);
