
let person = {
  name: "Rahul",
  greet: function() {
    console.log("Hello " + this.name);
  }
};

person.greet();
let person2 = {
  name: "Rahul",
  greet: () => {
    console.log("Hello " + this.name);
  }
};

person2.greet();