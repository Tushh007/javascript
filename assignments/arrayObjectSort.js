const arrayObjectSort = (arr) => {
  return arr.sort((a, b) => (b.radius - a.radius));
};

console.log(arrayObjectSort([{ radius: 5}, {radius: 9}, {radius: 2} ]));
