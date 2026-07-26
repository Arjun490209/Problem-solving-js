// ! dsa per se
let arr = [2, 4, 7, 12, 15, 27, 39, 50];
let value = 15;
let position = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    position = i;
    break;
  }
}
console.log(position);

// ! using method
console.log(arr.indexOf(value));
