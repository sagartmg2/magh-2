setTimeout(() => {
  console.log("inside timeout");
}, [2000]);

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map((element) => {
  return element * 2;
});

console.log({ doubledNumbers });
let names = ["ram", "shyam", "hari", "gita"];
/*  TODO:  exptected output
    users = [
        { 
            name:"ram",
            email:"ram@gmail.com",
            password:"ram0"
        },
        { 
            name:"shyam",
            email:"shyam@gmail.com",
            password:"shyam1"
        },
        { 
            name:"shyam",
            email:"hari@gmail.com",
            password:"hari2"
        },
    ]

*/

let users = names.map((element, index) => {
  return {
    name: element,
    email: `${element}@gmail.com`,
    password: `${element}-${index}`,
  };
});

users = names.map((element, index) => ({
  name: element,
  email: `${element}@gmail.com`,
  password: `${element}-${index}`,
}));

console.log({ users });

/* Promise  // network request */

let promse1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("data recieved.");
    reject("server error");
  }, [2000]);
});

console.log(promse1);

promse1
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("promise error:", err);
  });

try {
  let num1 = undefined;
  let num2 = undefined;
  let sum = num1 + num2;
  console.log(sum); // NaN
  let obj = {};
  obj.map((el) => {});
} catch (err) {
  console.log("err:", err.message);
}

console.log("right code");

let dbUsers = [
  { name: "Aarav", email: "aarav@gmail.com", password: "aarav0" },
  { name: "Aarya", email: "aarya@gmail.com", password: "aarya1" },
  { name: "Aasha", email: "aasha@gmail.com", password: "aasha2" },
  { name: "Anisha", email: "anisha@gmail.com", password: "anisha3" },
  { name: "Amit", email: "amit@gmail.com", password: "amit4" },
  { name: "Anjana", email: "anjana@gmail.com", password: "anjana5" },
  { name: "Bijay", email: "bijay@gmail.com", password: "bijay6" },
  { name: "Bikash", email: "bikash@gmail.com", password: "bikash7" },
  {
    name: "Chhiring",
    email: "chhiring@gmail.com",
    password: "chhiring8",
  },
  { name: "Dilip", email: "dilip@gmail.com", password: "dilip9" },
  {
    name: "Dipendra",
    email: "dipendra@gmail.com",
    password: "dipendra10",
  },
  { name: "Gagan", email: "gagan@gmail.com", password: "gagan11" },
  { name: "Gauri", email: "gauri@gmail.com", password: "gauri12" },
  { name: "Hari", email: "hari@gmail.com", password: "hari13" },
  {
    name: "Ishwari",
    email: "ishwari@gmail.com",
    password: "ishwari14",
  },
  { name: "Jeevan", email: "jeevan@gmail.com", password: "jeevan15" },
  { name: "Kabita", email: "kabita@gmail.com", password: "kabita16" },
  { name: "Kiran", email: "kiran@gmail.com", password: "kiran17" },
  {
    name: "Krishna",
    email: "krishna@gmail.com",
    password: "krishna18",
  },
  { name: "Laxmi", email: "laxmi@gmail.com", password: "laxmi19" },
  { name: "Manish", email: "manish@gmail.com", password: "manish20" },
  { name: "Nabin", email: "nabin@gmail.com", password: "nabin21" },
  {
    name: "Nirajan",
    email: "nirajan@gmail.com",
    password: "nirajan22",
  },
  {
    name: "Pradeep",
    email: "pradeep@gmail.com",
    password: "pradeep23",
  },
  { name: "Pragya", email: "pragya@gmail.com", password: "pragya24" },
  { name: "Rajan", email: "rajan@gmail.com", password: "rajan25" },
  { name: "Rina", email: "rina@gmail.com", password: "rina26" },
  { name: "Sabin", email: "sabin@gmail.com", password: "sabin27" },
  { name: "Sabina", email: "sabina@gmail.com", password: "sabina28" },
  { name: "Sajan", email: "sajan@gmail.com", password: "sajan29" },
  { name: "Saroj", email: "saroj@gmail.com", password: "saroj30" },
  { name: "Shanti", email: "shanti@gmail.com", password: "shanti31" },
  {
    name: "Srijana",
    email: "srijana@gmail.com",
    password: "srijana32",
  },
  { name: "Subash", email: "subash@gmail.com", password: "subash33" },
  { name: "Suman", email: "suman@gmail.com", password: "suman34" },
  { name: "Sunil", email: "sunil@gmail.com", password: "sunil35" },
  { name: "Sushil", email: "sushil@gmail.com", password: "sushil36" },
  { name: "Urmila", email: "urmila@gmail.com", password: "urmila37" },
  { name: "Yogesh", email: "yogesh@gmail.com", password: "yogesh38" },
];

let loginUser = (email, password) => {
  let matched = false;
  dbUsers.forEach((user) => {
    if (user.email == email && user.password == password) {
      matched = true;
    }
  });

  console.log(matched ? "login succ" : "failed");
};

loginUser = (email, password) => {
  let matchedUsers = dbUsers.filter(
    (user) => user.password == password && user.email === email
  );

  console.log(matchedUsers.length > 0 ? "login succ" : "failed");
};

loginUser = (email, password) => {
  let matchedUser = dbUsers.find(
    (user) => user.password == password && user.email === email
  );
  //   matchedUser // [{}]
  //   matchedUser // {}
  console.log(matchedUser ? "login succ" : "failed");
};


loginUser("yogesh@gmail.com", "yogesh38"); // login successful
loginUser("urmila@gmail.com", "urmila37"); // login successful
loginUser("urmila@gmail.com", "urmila-wrong"); // Invalid Credential
