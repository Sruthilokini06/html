
// Define a class
class Person {
  // Constructor to initialize properties
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  // Method to display information
  introduce() {
    console.log(`Hello! My name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}.`);
  }

  // Method to have a birthday
  birthday() {
    this.age += 1;
    console.log(`🎉 Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  }
}

// Create instances
const person1 = new Person("Alice", 25, "London");
const person2 = new Person("Bob", 30, "New York");

// Use methods
person1.introduce(); // Hello! My name is Alice...
person2.introduce(); // Hello! My name is Bob...

person1.birthday();  // Happy Birthday Alice!...
person2.birthday();  // Happy Birthday Bob!...
