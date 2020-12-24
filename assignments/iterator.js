function* cycle(iter) {
  while (true) {
    for (const el of iter) {
      yield el;
    }
  }
}

a = "acb";
// cycle -> string -> object
obj = cycle(a);

console.log(obj.next()); // { value: 'a', done: false }
console.log(obj.next()); // { value: 'b', done: false }
console.log(obj.next()); // { value: 'c', done: false }
console.log(obj.next()); // 'a'
console.log(obj.next()); // 'b'
console.log(obj.next()); // 'c'
console.log(console.log(obj.next())); // 'a'
