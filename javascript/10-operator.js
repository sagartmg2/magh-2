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

function checkStudentEligibility(student) {
  if (student.hasPaid) {
    console.log(`${student.name} can give`);
  } else if (student.hasScholorship) {
    console.log(`${student.name} can give`);
  } else {
    console.log(`${student.name} cannot give`);
  }
}

checkStudentEligibility(students[0]);
checkStudentEligibility(students[1]);
checkStudentEligibility(students[2]);


/*  ram can give exam  */
/*  hari cannot give exam  */
/*  shyam can give exam  */

let student1 = {
  name: "ram",
  hasPaid: false,
  hasScholorship: true,
};

if (student1.hasPaid) {
  console.log("ram can give");
} else if (student1.hasScholorship) {
  console.log("ram can give");
} else {
  console.log("ram cannot give");
}

/* operators
        assignment operators
             = 
            post increment
            pre increment
        
         - arthematic operators
             +
             -
              *
              / -- division
              % -  modolus -- returns remainder
        
             

         - comparision
             <
             >
             <=
             >=
             ==  // equality opertor

         - logical operators.
                - AND operator
                - OR
                - Not
*/

console.log(10 / 3);
console.log(10 % 3);

let services = [
  {
    index: 0,
    title: "web",
    imagae: "",
  },
  {
    index: 1,
    title: "Software Development",
    imagae: "",
  },
];

console.log(0 % 2); // 0
console.log(1 % 2); // 1
console.log(2 % 2); // 0
console.log(3 % 2); // 1

let count = 100;
// count = 101
// count = count + 1
// count += 10;
// count++ // post increment
// ++count // pre increment

// console.log(++count);
// console.log({ count: count });
// console.log({ count });

function double(input) {
  return input * 2;
}
console.log(double(11));

// console.log(double( count++ ));  // double(100)
// console.log(double( ++count ));  // double(101)

console.log(10 < 5);
console.log(10 < 10);
console.log(10 <= 10);
console.log(5 <= 10);

if (5 < 10) {
  console.log("true statement");
}

console.log("ram" == "ram");// true
console.log("ram" == "Ram"); // false
console.log("ram" == "ram "); // false


let dbUser = {
    username:"ram12",
    password:"12345678"
}

let inputPassword = "12345"
let inputUsername = "ram"  
// ram can login



