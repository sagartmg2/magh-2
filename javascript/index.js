let students = [
  {
    name: "ram",
    hasPaid: false,
    hasScholorship: true,
  },
  {
    name: "hari",
    hasPaid: false,
    hasScholorship: false,
  },
  {
    name: "shyam",
    hasPaid: true,
    hasScholorship: false,
  },
];

let users = ["ram", "hari", "shyam"];

/* console.log(users[0]);
console.log(users[1]);
console.log(users[2]);
 */

for (let index = 0; index < 3; index++) {
  console.log(index);
  console.log(users[index]);
}


let todos = [
  {
    title: "html",
    status: true,
  },
  {
    title: "react",
    status: false,
  },
  {
    title: "express",
    status: false,
  },
];




for (let index = 0; index < 3; index++) {
  if (todos[index].status) {
    console.log(`${todos[index].title} is complted`);
  } else {
    console.log(`${todos[index].title} is pending`);
  }
}


function findMultiplication(input){

  /* code to find multiplication of given input */

   /*  
    5 * 1 = 5  to 5 * 10  = 50
    5 * 1 = 5  to 5 * 10  = 50
   
   */
}

findMultiplication(5)
findMultiplication(10)


// console.log(`${todos[0].title} is ${todos[0].status}`);
// console.log(`${todos[1].title} is ${todos[1].status}`);
// console.log(`${todos[2].title} is ${todos[2].status}`);

/* findMultiplication(5, 5, 10) */
/* findMultiplication(10, 1, 5) */

/* TODO: print each users using loop */

/* 
   loop  
    - for  ( when we know number of iterations )
    - while
    - do while
*/

// for( startingPoint; condition; mutator ){

for (let count = 1; count <= 5; count++) {
  console.log({ count });
}

console.log("end of loop");
