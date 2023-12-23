exports.Addition = function (x, y) {
  return x + y;
};
exports.Factorial = function (num) {
  var fact = 1;
  for (var i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
};
exports.Subtraction = (x, y) => {
  return x - y;
};
