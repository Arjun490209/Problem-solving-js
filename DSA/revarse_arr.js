// ! dsa solve
let data = [6, 4, 7, 9];

function customReverse(data, start, end) {
  if (end >= start) {
    let temp = data[start];
    data[start] = data[end];
    data[end] = temp;
    customReverse(data, start + 1, end - 1);
  }
}

customReverse(data, 0, data.length - 1);

// ! prebuild
data.reverse();
console.log(data);
