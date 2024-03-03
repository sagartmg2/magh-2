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

let numbers = [1, 2, 3, 4, 5, 100, 200, 300];

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






