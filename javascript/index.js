/* if else */
/* loop */
/* function - return */

let numbers = [6, 5, 4, 3, 2, 1, 0];
let evenNumbers = [];

/* hints

    modolous %
 */

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index]);
    evenNumbers.push(numbers[index]);
  }
}

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  if (element % 2 === 0) {
    console.log(element);
    evenNumbers.push(element);
  }
}

console.log(evenNumbers);

let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "css",
    status: true,
  },
  {
    title: "js",
    status: true,
  },
  {
    title: "react",
    status: false,
  },
];

/* console.log(todos[0].title);
console.log(todos[1].title);
console.log(todos[2].title);
console.log(todos[3].title); */

let completedTodos = [];

for (let index = 0; index < todos.length; index++) {
  if (todos[index].status) {
    console.log(todos[index].title);
    completedTodos.push(todos[index]);
  }
}

console.log(completedTodos);

/* function */
/* return */
/* reserach: arrow function */
/* optional: array.ForEach())*/

function double(input) {
  return 2 * input;
}

const triple = (input) => {
  return 2 * input;
}
