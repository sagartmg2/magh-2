/* let input  = 2 */

function calculateDouble(input) {
  // input is known as parameter
  //   console.log({ input: input });
  //   console.log({ input });
  console.log(`double of ${input} is ${input * 2}`);
}

/* calling, executing, running a function */
calculateDouble(2); // 2 is arguement
calculateDouble(10); // 10 is arguement
calculateDouble(2000);

let input1 = 1;
let input2 = 2;
let result1 = input1 + input2;
// console.log(`${input1} + ${input2} = ${result1}`);

let input3 = 2;
let input4 = 3;
// console.log(`${input3} + ${input4} = ${input3 + input4}`);

let input5 = 10;
let input6 = 6;
// console.log(`${input5} + ${input6} = ${input5 + input6}`);

/* let userInput1 = 1 , in first funciton call */
/* let userInput1 = 2 , in second funciton call */
/* let userInput1 = 10 , in third funciton call */

function calculateSum(userInput1, userInput2) {
  //   console.log({ userInput1, userInput2 });
  console.log(`${userInput1} + ${userInput2} = ${userInput1 + userInput2}`);
}

calculateSum(1, 2);
calculateSum(2, 3);
calculateSum(10, 6);
calculateSum(11000, 50);

let topics = [
  {
    title: "html",
    status: "complted",
  },
  {
    title: "array",
    status: "completed",
  },
  {
    title: "object",
    status: "completed",
  },
  {
    title: "function",
    status: "complted",
  },
  {
    title: "loop",
    status: "pending",
  },
];

/* TODO: convert using function */
//   console.log(`${topics[0].title} is ${topics[0].status}.`);
//   console.log(`${topics[1].title} is ${topics[1].status}.`);
// console.log(`${topics[2].title} is ${topics[2].status}.`);
// console.log(`${topics[3].title} is ${topics[3].status}.`);
// console.log(`${topics[4].title} is ${topics[4].status}.`);

function printTopicInfo(forIndex) {
  console.log(`${topics[forIndex].title} is ${topics[forIndex].status}.`);
}

printTopicInfo(0); // for html
printTopicInfo(1); // for css
printTopicInfo(2); // for
printTopicInfo(3); // for
printTopicInfo(4); // for


function printTopicStatus( topicObject ) {
//   let selectedTopic = topics[0]; //{ title :html, status:pending}
  console.log(`${topicObject.title} is ${topicObject.status}.`);
}

console.log("________");
printTopicStatus(topics[0])
printTopicStatus(topics[1])
printTopicStatus({title:"react",status:"pending"})


/* return in function  */
/* arrow function */