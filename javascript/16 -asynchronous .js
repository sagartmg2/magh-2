console.log("one");
console.log("two");

let numbers = [6, 5, 4];

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  console.log(element);
}

// for (let index = 0; index < 10000; index++) {
//   console.log("index-", index);
// }

console.log("end of loop");

/* function , callback functions  */

const double = (input) => {
  return input * 2;
};

let result = double(100);
console.log(result);

/* asynchronous */
/* callback
        - a function passed as an parameter to another fuction
*/
const doSomething = () => {
  console.log("do something");
  return undefined;
};

// setTimeout(doSomething(), 200); // setTimeout(undefined, 2000) // which is wrong

setTimeout(doSomething, 2000);
setTimeout(() => {
  console.log("do something agin");
}, 1000);

console.log("after set timeout");
