
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

function double(x) {
  return x * 2;
}

function square(x) {
  return x * x;
}

let result = compose(square, double);
console.log(result(3));