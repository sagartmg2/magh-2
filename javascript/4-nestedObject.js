/* array
    - always starts with index 0
*/

let courses = ["mern", "marketing", "python"];
let detailedCourses = [
  {
    name: "mern",
    duration: 3,
  },
  {
    name: "marketing",
    duration: 2,
  },
  {
    name: "python",
    duration: 2.5,
  },
];

/* code here to change marketing to digitial-marketing  */
console.log(courses[1]); // "marketing"
courses[1] = "digital-marketing";
console.log("after", courses);

console.log(detailedCourses[1]); // { name,dura}

console.log("before:", detailedCourses);
console.log("before:", detailedCourses[1].name);

/* code : change marketing to digital-mar.... */
detailedCourses[1].name = "dital-marketing";

console.log("after", detailedCourses);


/* 
TODO: create a list of users same like below, 
    : each user can have two or more numbers : which provider ?
 */ 

let user1 = {
  name: "ram",
  age: 20,
  address:{
    permanent:{
        district:"jhapa",
        ward: -2, // TODO: change this to 20
        province:1
    },
    temp:{
        district:"ktm",
        ward:16,
        province:3
    },
  }
//   adddresses: [
//     {
//       type: "permatnet",
//       name: "jhapa",
//     },
//     {
//       type: "temp",
//       name: "ktm",
//     },
};

user1.name = "sita";

/* TODO: 
    create a list of array of colors , having rgb,hex,name values
 */

let colors = [
  {
    name: "red",
    hex: "#FF0000",
    rgb: "rgb(255,0,0)",
  },
  {
    name: "gree",
    hex: "#FFFF00",
    rgb: "rgb(255,0,0)",
  },
  {
    name: "blue",
    hex: "#FF0000asdfasdfasdfasdf", // change this to correct value
    rgb: "rgb(0,0,255)",
  },
];
