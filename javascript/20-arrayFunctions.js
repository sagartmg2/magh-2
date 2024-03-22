let todos = [
  { title: "html", status: true, createdAt: "2023", updatedAt: "2024" },
  { title: "css", status: true, createdAt: "2023", updatedAt: "2024" },
  { title: "react", status: false, createdAt: "2023", updatedAt: "2024" },
  { title: "express", status: false, createdAt: "2023", updatedAt: "2024" },
];

let modifiedTodos = todos.map((element) => {
  if (element.status) {
    return {
      title: element.title,
      status: "completed",
    };
  } else {
    return {
      title: element.title,
      status: "pending",
    };
  }
});

modifiedTodos = todos.map((element) => {
  if (element.status) {
    return {
      ...element,
      status: "complted", // spread operator
    };
  } else {
    return {
      ...element,
      status: "pending", // spread operator
    };
  }
});

modifiedTodos = todos.map((el) => {
  return {...el,status:el.status ? "compled":"pending" }
});

modifiedTodos = todos.map((el) => ({...el,status:el.status ? "compled":"pending" }));

console.log(modifiedTodos);

/* 
expected output:
let modifiedTodos = [
  { title: "html", status: "compolted" },
  { title: "css", status: "compolted" },
  { title: "react", status: "pending" },
  { title: "express", status: "pending" },
]
 */


let completedTodos = [];

/* for (let index = 0; index < todos.length; index++) {
  let element = todos[index];
  if (element.status) {
    completedTodos.push(element);
  }
} */

/* todos.forEach((element) => {
  if (element.status) {
    completedTodos.push(element);
  }
}); */

completedTodos = todos.filter((element) => {
  if (element.status) {
    return true;
  }
});

completedTodos = todos.filter((el) => el.status == true);
completedTodos = todos.filter((el) => el.status);
let pendingTodos = todos.filter((el) => !el.status);

console.log({ completedTodos });

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter((element, index) => {
  console.log(element);
  if (element % 2 == 0) {
    return true;
  }
});

evenNumbers = numbers.filter((el) => el % 2 == 0);

let oddNumbers = numbers.filter((el) => {
  if (el % 2 !== 0) {
    return true;
  }
});

oddNumbers = numbers.filter((el) => el % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

let doubledNumbers = numbers.map((element) => {
  return element * 2;
});

let tripledNumbers = numbers.map((el) => el * 3);

console.log({ doubledNumbers });
console.log({ tripledNumbers });

const double = (input) => {
  return input * 2;
};

const triple = (input) => input * 3;
const quadraple = (input) => input * 4;

console.log(double(100));
console.log(triple(100));
console.log(quadraple(100));


