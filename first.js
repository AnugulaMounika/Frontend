let username="Mounika";
console.log(username);
const num = 4;
if (num % 3 === 0 && num % 5 === 0) {
  console.log("Foo & Bar");
} else if (num % 3 === 0) {
  console.log("Foo");
} else if (num % 5 === 0) {
  console.log("Bar");
} else {
  console.log("Neither Foo nor Bar");
}

const num1 = 10;
const num2 = 5;
const result = num % 2 === 0 ? num1 + num2 : num1 - num2;
console.log(result);
