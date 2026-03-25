
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, my name is " + this.name);
  }

  showAge() {
    console.log("My age is " + this.age);
  }
}

let p1 = new Person("Rahul", 21);
p1.greet();
p1.showAge();