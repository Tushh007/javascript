let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a2 = a1.filter((element) => element % 2);
let a3 = a2.map((element) => element * element);
let a4 = a3.reduce((prev_element, current_element) => {
  return prev_element + current_element;
});

console.log(a1, a2, a3, a4);

function range(start, end, step) {
  var res = [];
  var item = start;
  while (item <= end) {
    res.push(item);
    item += step;
  }
  return res;
}

function sum_natural_numbers(n) {
  return range(1, n, 1).reduce(function (prev, curr) {
    return prev + curr;
  });
}

console.log(sum_natural_numbers(10));
