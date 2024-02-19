// var fruits = ["apple", "banana", "grape"];

// fruits.push("kiwi");
// // fruits.pop("grape");
// console.log(fruits.length);

// console.log(fruits[fruits.length - 1]);

// let numbers = [1, 2, 3, [[[[[4]]]]], 5];

// console.log(numbers[3][0].flat(Infinity));

// let number = [1, 2, 3, 4];
// let remove = number.slice(2);
// let remove = number.splice(2, 2);

// remove.push("salom");
// console.log(number);

// console.log(remove);

// let number = ["apple", "banana", "orange"];
// let updatednambers = [...number, "kiwi", "grape", "mango"];
// console.log(updatednambers);

// updatednambers.map((value, index, array) => {
//   console.log(value, index, array);
// });
let number = [1, 2, 3, 4];

let sum = 0;
// number.map((value) => {
//   console.log(value);
//   sum += value;
// });
// console.log(sum);

console.log(
  number.reduce((oldValue, currentValue) => {
    console.log(oldValue, currentValue);
    return oldValue + currentValue;
  }, 0)
);
