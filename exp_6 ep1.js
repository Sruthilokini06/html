
const numbers = [1, 2, 3];
const cloneNumbers = [...numbers];

console.log("Original Array:", numbers);
console.log("Cloned Array:", cloneNumbers);

cloneNumbers.push(4);
console.log("After modifying clone:", cloneNumbers);
console.log("Original remains:", numbers);
console.log("--------------------------");


const arr1 = [10, 20];
const arr2 = [30, 40];

const mergedArray = [...arr1, ...arr2];
console.log("Merged Array:", mergedArray);

const mergedArrayExtra = [0, ...arr1, ...arr2, 50];
console.log("Merged Array with Extra Elements:", mergedArrayExtra);
console.log("--------------------------");

const person = { name: "Alice", age: 25 };
const clonePerson = { ...person };

console.log("Original Object:", person);
console.log("Cloned Object:", clonePerson);

clonePerson.city = "London";
console.log("After modifying clone:", clonePerson);
console.log("Original remains:", person);
console.log("--------------------------");

const obj1 = { name: "Alice", age: 25 };
const obj2 = { city: "London", country: "UK" };

const mergedObj = { ...obj1, ...obj2 };
console.log("Merged Object:", mergedObj);

const obj3 = { name: "Bob", age: 30 };
const mergedObj2 = { ...obj1, ...obj3 };
console.log("Merged Object with Overwrite:", mergedObj2);
