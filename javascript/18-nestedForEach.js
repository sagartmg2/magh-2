/* research: ternary operator // single line if else   */

let cartItems = [
  {
    product: "watch",
    quantity: 1,
    rate: 1000,
  },
  {
    product: "mouse",
    quantity: 2,
    rate: 2000,
  },
  {
    product: "keyboard",
    quantity: -1, // this is negative , so it should be ignored
    rate: 1000,
  },
];

/* subtotal is 21000 */
/* loop , each loop, add price of products to subTotal */

let subtotal = 0;

cartItems.forEach((element) => {
  subtotal = subtotal + element.rate * element.quantity;
});

console.log(`subtotal is ,${subtotal}`);

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
        quantity:-2,
        rate: 2000,
      },
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product: "keyboard",
        quantity: -1,
        rate: 2000,
      },
    ],
  },
];


users.forEach((user) => {
  let total = 0;

  user.cartItems.forEach((item) => {
    total = total + item.rate * item.quantity;
  });

  console.log(`${user.name} has orderded of rs:${total}`);
});

/* ram has order of rs:5000  */
/* hari has order of rs: 2000  */
