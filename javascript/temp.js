let users = [
  {
    name: "ram",
    cartItems: [
      {
        product_id: 1,
        price: 100,
        quantity: 2,
      },
      {
        product_id: 2,
        price: 300,
        quantity: 2,
      },
      {
          product_id: 2,
          price: 300,
          quantity: 2,
        }
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product_id: 3,
        price: 0,
        quantity: 2,
      },
      {
        product_id: 4,
        price: 0,
        quantity: 2,
      },
    ],
  },
];
// find user and amount of products ordered

function check(userName){
  let finalPrice = 0;
  users.forEach(checkUserName=>{
      let {name, cartItems}= checkUserName;
      const lowerCaseArrayName = name.toLowerCase();
      const lowerCaseInputName = userName.toLowerCase();

      if (lowerCaseArrayName==lowerCaseInputName){
         cartItems.forEach(add =>{
              let itemPrice = add.price
              finalPrice = finalPrice +itemPrice
          })
          console.log(`${name} has ordered of ${finalPrice}`);

         }else{
          console.log("invalid username");
         }

  })
}

check("ram")
check("hari")