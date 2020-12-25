const criteriaFiltering = (arr, criteriaFn) => {
  return arr.filter((element) => !criteriaFn(element));
};

// Example
const criteriaFunction = (element) => {
  return element % 2 === 0;
};

console.log(criteriaFiltering([1, 2, 3, 4, 5, 6, 7, 8, 9], criteriaFunction));
