
function greet(name) {
  return "Hello " + name;
}

function processUser(callback) {
  console.log(callback("Rahul"));
}

processUser(greet);