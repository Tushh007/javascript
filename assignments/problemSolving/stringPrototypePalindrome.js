String.prototype.isPalindrome = function () {
  return this.split("").reverse().join("").valueOf() === this.valueOf();
};

/** Alternatively we can also do this **/
String.prototype.isPalindrome = function () {
  return this.split("").reverse().join("") == this; // with a == operator we don't need to use the valueOf method. WHY?? Check the type of this.split('').reverse().join('')
};
