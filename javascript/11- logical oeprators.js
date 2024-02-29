let dbUser = {
  username: "ram12",
  password: "12345678",
  isActivated: true,
};

let inputPassword = "12345678333";
let inputUsername = "ram12222";

/* can login */

/*

    if (dbUser.username == inputUsername) {
    if (dbUser.password == inputPassword) {
        console.log("can login");
    } else {
        console.log("cannot login");
    }
    } else {
    console.log("cannot login");
    }
*/

if (
  dbUser.username === inputUsername &&
  dbUser.password === inputPassword &&
  dbUser.isActivated
) {
  //  if ( false && false && true )
  //  if ( false )
  console.log("can login");
} else {
  console.log("cannot login");
}

/* logial operators
        AND  - each and every condition must be true  &&
        OR  - any one of the condition can be true  ||
        NOT  !
*/

let student1 = {
  name: "ram",
  hasPaid: true,
  hasScholorship: false,
  fullAttenance: true,
};

/* if (student1.hasPaid) {
  console.log("ram can give");
} else if (student1.hasScholorship) {
  console.log("ram can give");
} else {
  console.log("ram cannot give");
} */



if ((student1.hasPaid || student1.hasScholorship) && student1.fullAttenance) {
  console.log("can give exam");
} else {
  console.log("cannot give exam");
}


/* 
if (student1.fullAttendence) {
    if (student1.hasPaid) {
      console.log("ram can give");
    } else if (student1.hasScholorship) {
      console.log("ram can give");
    } else {
      console.log("ram cannot give");
    }
  } else {
    console.log("ram cannot give");
  } */


  /* for loop */