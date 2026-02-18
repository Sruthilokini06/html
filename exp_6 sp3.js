
const name = "Alice";
const age = 22;
const city = "London";

const person = {
  name,
  age,
  city,
  greet() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);

person.greet();
