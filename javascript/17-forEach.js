let numbers = [6, 5, 4];
numbers.push(3);

for (let index = 0; index < numbers.length; index++) {
  let element = numbers[index];
  console.log(element);
}

/*
    array function
      - push
      - forEach

*/

const printElement = (element) => {
  console.log(element);
};

numbers.forEach(printElement);

/* this is same as above */
numbers.forEach((element) => {
  console.log(element);
});

["ram", "shyam", "hari"].forEach((element) => {
  console.log(element);
});

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

let compoltedTodos = [];

todos.forEach((element) => {
  if (element.status) {
    compoltedTodos.push(element);
    console.log(`${element.title} is compolted`);
  } else {
    console.log(`${element.title} is pending`);
  }
});

console.log(compoltedTodos);

/* research: ternary operator // single line if else   */

let cartItems = [
  {
    product: "watch",
    quantity: 1,
    rate: 1000,
  },
  {
    product: "mobile",
    quantity: 1,
    rate: 20000,
  },
];


/* subtotal is 21000 */
/* forEach */








let users = [
  {
    name: "ram",
    cartItems: [
      {
        product: "watch",
        quantity: -1,
        rate: 1000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: 1,
        rate: 2000,
      },
      {
        product: "mouse",
        quantity: 2,
        rate: 2000,
      },
    ],
  },
];

/* ram has order of rs:  */
/* hari has order of rs:  */
