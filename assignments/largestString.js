const largestStringReduce = (arr) => {
  return arr.reduce((prev, current) => {
    if (prev > current) return prev;
    return current;
  });
};

console.log(largestStringReduce(["ab", "abc", "abdb", "a", "aaa", "abdba"]));
