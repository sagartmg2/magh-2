/* 
    ctrl + / 
    alt + shift + a
   
*/

/**
 * calculates the sum of two numbers
 * @param input1
 * @param input2
 */

function double(input) {
  return input * 2;
}

let input1 = double(100);
let input2 = double(200);

console.log({ input1 });
console.log({ input2 });

function sum(input1, input2) {
  let result = input1 + input2;
  console.log(`the sum of ${input1} and ${input2} is ${result}`);
}

sum( double(50), double(100)  );




// console.log("double of 2", double(2));

console.log("type of 1212 ",typeof (1212));
console.log("type of hello ", typeof "hello");

// let result = sum(10, 20)
// console.log("output", result );
// console.log("dobule of 2", double(2));
