let blogs = [
  {
    title: "Basic Computer  Training in Nepal",
    created_at: "2024-03-22T15:14:31.944539+05:45",
    author:{
        firstName:"ram",
        middleName:"bdr",
        surName:"sharma",
        age:20
    }
  },
  {
    title: "Exploring Video Editing Opportunities",
    created_at: "2024-01-22T14:51:41.401510+05:45",
    author:{
      firstName:"hari",
      middleName:"bdr",
      surName:"sharma",
      age:20
    }
  },
  {
    title: "Mastering Adobe Illustrator at Mindrisers",
    created_at: "2024-04-22T14:49:45.524809+05:45",
    author:{
      firstName:"shyam",
      middleName:"bdr",
      surName:"sharma",
      age:20
    }
  },
];

function getFullName(user){
  // let {firstName, middleName, lastName} = user // object destructuring
  return `${user.firstName} ${user.middleName}  ${user.lastName}` 
}

// blogs[0].created_at = blogs[0].created_at.substring(0,10)
// blogs[1].created_at = blogs[1].created_at.substring(0,10)
// blogs[2].created_at = blogs[2].created_at.substring(0,10)

function formatDate(fullDate){
    // console.log(fullDate.substring(0,10))
    return fullDate.substring(0,10)
}

formatDate("2024-04-22T14:49:45.524809+05:45")

// blogs[0].created_at = formatDate(  blogs[0].created_at    )
// blogs[1].created_at = formatDate(  blogs[1].created_at    )
// blogs[2].created_at = formatDate(  blogs[2].created_at    )


function convertDateOfBlogs(index){
  blogs[index].created_at = formatDate(blogs[index].created_at)
}

convertDateOfBlogs(0)
convertDateOfBlogs(1)
convertDateOfBlogs(2)

console.log(blogs);

let products = [
  {
    title: "one",
    created_at: "2024-03-22T15:14:31.944539+05:45",
  },
  {
    title: "two",
    created_at: "2024-01-22T14:51:41.401510+05:45",
  },
  {
    title: "three",
    created_at: "2024-02-22T14:49:45.524809+05:45",
  },
];

function convertDateOfProducts(index){
  products[index].created_at = formatDate(  products[index].created_at  )
}
convertDateOfProducts(0)
convertDateOfProducts(1)
convertDateOfProducts(2)

console.log(products);

// "2024-02-22T15:14:31.944539+05:45".substring(0,10)

/* 

  let blogs = [
    {
      title: "Basic Computer  Training in Nepal",
      created_at: "2024-03-22",
    },
    {
      title: "Exploring Video Editing Opportunities",
      created_at: "2024-01-22",
    },
    {
      title: "Mastering Adobe Illustrator at Mindrisers",
      created_at: "2024-02-22",
    },
  ];

*/


let users = [
  {
    firstName:"ram",
    middleName:"bdr",
    surName:"sharma",
    age:20
  },
  {
    firstName:"ram",
    middleName:"bdr",
    surName:"sharma",
    age:20
  },
  {
    firstName:"ram",
    middleName:"bdr",
    surName:"sharma",
    age:20
  }
]







