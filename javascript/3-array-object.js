
// color = "red" // wrong syntax 
let color = "red"  // declaration and initialization

let brand // declaration
brand = "sony" // initialzation
brand = "lg" // re-initialzation

let web = "web dev"
let course = web
// let course = "mern"  // error: 

const ROLE = "customer"
// ROLE = "admin"   // cannot change constant variable

let price  = 100
price = 100.10

let isPaid = true


/* data types

    string  - text
    number
        - integer
        - float / double / decimal
    boolean 
        - true
        - false
    undefined  // javascript only
    null (empty)


    collections 
        - array 
            - collections of multiple values
            - collection of similar data-types
            - index: always starts with 0
            syntax

            let <variableName> = [ <element>,<element>,....]
        - object
*/

let courses = null
courses = ["web","python"]
/*  code to fetch courses
    courses = "list of courses"
*/

console.log(courses);

let fruit1 = "apple"
let fruit2 = "kiwi"
let fruit3 = "orange"
let fruit4 = "banana"

// let fruits = "apple","kiwi"
// let fruits = "apple , kiwi"

let fruits = [ "app", "kiwi", "orange" ]

console.log("fruits 3rd index - prev", fruits[3]);
fruits[3] = "banana"
console.log("fruits 3rd index - after", fruits[3]);

console.log("0th index - prev",fruits[0]); //app
/* CHANGE THIS app TO apple */
fruits[0] = "apple"
console.log("0th index - after",fruits[0]); //app




let projectorColor = "white"
let projectorBrand = "samsung"
let projectorPrice = 50000
let projectorSize = "md"
let projectorQuality = "average"

/* object which has key and value pair 

    synatx:
    let <variableName> = {
        <key> :<value>,
        <property> :<value>,
        <attribute> :<value>,
        <field> :<value>,

    }
*/

let projector = {
    color:"white",
    color:"black",
    Color:"red",
    brand:"samsung", // change this to acer
    price:50000,
    size:"md",
    quality:"avg"
}

console.log("prev - brand",projector.brand);
projector.brand = "acer"
console.log("after - brand",projector.brand);

console.log("website - prev",projector.website);
projector.website = "https...." 
console.log("website - after ",projector.website);


console.log(projector);


let user1 = {
    name:"sita",
    age:20
}

let user2 = {
    name:"ram",
    age:22
}

let user3 = {
    name:"hari",
    age:40
}

let users = [ user1,user2,user3  ] 
console.log(users);


// let brands = [ "apple", "samsung"]
let brands = [
    {
        name:"apple",
        ceo:"abc",
        website:"https:apple.com"
    }, 
    {
        name:"samsung",
        ceo:"xyz",
        website:"https:apple.com" // change this to samsung.com
    }
]


   
   
