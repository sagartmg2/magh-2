var person = "sony"

let greeting = "Hi"
let age = 20


console.log(greeting,person);

/* variable declartion & initialization */
let course
course = "web"
course = "mern"
let title = course
console.log("course", course);
console.log("title",title);

var color = "white"
var color = "red"

let size = "sm"
//let size = "sm" // cannot redelcarte variable alredy created using let
size = "md"
size = "lg"


const PI = 3.145
// const earthRotation = "w-e"
const EARTH_ROTATION = "w-e"


let isVerified = true
isVerified = false // re-initaization

let subTotal = 100
let vat = 0.5
let grandTotal = subTotal + vat

let count;  // undefined
console.log(count);


/* DATA TYPES 
    primitive data types
        1. string text
        2. number
            - integer   // whole number
            - float / dobule  // decimal 
        3. boolean
            - true
            - false
        4. undefined // javascript onlt  
        5. null  // empty

    non-primitive  ( collections )
        - array

*/

let data = null 

let topic1 = "html"
let topic2 = "css"
let topic3 = "js"
topic3 = "javascript"
console.log("topic3", topic3);

let topic4 = "react"

// let topics = "html, css, js, react"

/* Array
    -  collections of multiple values(elements)
    -  usually it is collection of similar data-types
    -  always starts with 0th index

    syntax 
        let <variableName> =  [ <element>,<element>, ...   ]
*/

let topics = [ "html" ,"css", "js", "react" ]
console.log(topics)

let ages = [ 10 , 20, "thirty"]
// let ages = [ 0th , 1st, 2nd ]


console.log("ages:prev:", ages );
console.log("2nd index:prev:", ages[2] );

/* code to change "thirty" by 30 */
ages[2] = 30

console.log("2nd index:after:", ages[2] );
console.log("ages:after:", ages );


console.log("3rd index:prev:", ages[3] );
ages[3] = 40
console.log("3rd index:after:", ages[3] );


let users  = [ "ram", "sita", "gita"]

/* we need each users phone, address,age */

/* object in javascript */




