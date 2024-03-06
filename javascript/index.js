function findMultiplication(filterObj) {
  /* 
    object destructuring

    let input = filterObj.input;
    let startFrom = filterObj.startFrom;
    let endAt = filterObj.endAt;

   */

  let { input, startFrom, endAt } = filterObj;

  for (let startingPoint = startFrom; startingPoint <= endAt; startingPoint++) {
    let result = input * startingPoint;
    console.log(`${input} * ${startingPoint} = ${result} `);
  }
}

// findMultiplication(10, 5, 10);
// findMultiplication(12, 1, 5);

findMultiplication({
  input: 10,
  startFrom: 5,
  endAt: 10,
});

findMultiplication({
  input: 12,
  startFrom: 1,
  endAt: 5,
});

let numbers = [1, 2, 3, 4, 5];
numbers[0] = numbers[0] * 2;
numbers[1] = numbers[1] * 2;
numbers[2] = numbers[2] * 2;
numbers[3] = numbers[3] * 2;
numbers[4] = numbers[4] * 2;

console.log(numbers); // [2,3,6,8,10]


let brands = ["apple", "samsung", "lg", "sony"];

let companies = [
  {
    name:"mindrisers",
    url:"www.midrisers.com"
  },
  {
    name:"leapfrog",
    url:"www.leapfrog.com"
  },
  {
    name:"cotiviti",
    url:"www.cotivity.com"
  },
]


/*
  url of mindrisers is www.mindrisers.com
  url of leapfrog is www.leapfrog.com
  url of cotiviti is www.cotivity.com
 */

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
    ],
  },
  {
    name: "hari",
    cartItems: [
      {
        product_id: 3,
        price: 100,
        quantity: 2,
      },
      {
        product_id: 4,
        price: 300,
        quantity: 2,
      },
    ],
  },
];

/* ram has orderded of rs 800  */
/* hari has orderded of rs ...  */



for (let index = 0; index < numbers.length; index++) {
  numbers[index] = numbers[index] * 2;
}

// numbers[0] = numbers[0] * 2;
// numbers[1] = numbers[1] * 2;
// numbers[2] = numbers[2] * 2;
// numbers[3] = numbers[3] * 2;
// numbers[4] = numbers[4] * 2;

/*  code here to double the element of number  */

console.log(numbers); //expected output: [2,4,6,8,10]
