let users = [
  {
    name: "ram",
    cartItems: [
      {
        product: "watch",
        quantity: 1,
        rate: 1000,
      },
      {
        product: "mouse",
        quantity: -1,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: -1, // ingore negative ones
        rate: 2000,
      },
    ],
  },
];

users.forEach((user) => {
  let total = 0;

  user.cartItems.forEach((item) => {
    /*  if(item.quantity>0){
      total = total + item.rate * item.quantity;
    } */
    total = total + (item.quantity > 0 ? item.quantity * item.rate : 0);
  });

  console.log(`${user.name} has orderded of rs:${total}`);
});

/* ram has order of rs:5000  */
/* hari has order of rs: 2000  */

/* ternary operator */
/* just like forEach we have .filter , .map , .find .... */

let todos = [
  { title: "html", status: true },
  { title: "css", status: true },
  { title: "react", status: false },
  { title: "express", status: false },
];

let completedTodos = [];
/* 
 completedTodos = [
  { title: "html", status: true },
  { title: "css", status: true },
];
*/
// .filter() // reserach

let modifiedTodos = []
/* 
 modifiedTodos = [
  { title: "html", status: "compolted" },
  { title: "css", status: "compolted" },
  { title: "react", status: "pending" },
  { title: "express", status: "pending" },
]; */
// .map() // reserach




todos.forEach((todo) => {
  /*
   if (todo.status) {
    console.log(`${todo.title} is compleed`);
  } else {
    console.log(`${todo.title} is pending`);
  } 
  */

  console.log(`${todo.title} is ${todo.status ? "complted" : "pending"}`);
});
