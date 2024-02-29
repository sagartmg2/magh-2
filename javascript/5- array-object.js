let user1 = {
  name: "ram",
  age: 20,
  phone: {
    ncell: "98xx",
    ntc: "96XX",
  },
};

let users = [
  {
    name: "ram",
    age: 20,
    phone: {
      ncell: "98xx",
      ntc: "96XX",
    },
  },
  {
    name: "sita",
    age: 20,
    phone: {
      ncell: "abcd", // TODO: change this to 9808...
      ntc: "98510XX",
    },
  },
];

console.log(user1.phone.ncell);

/* TODO: create an array of courses having mulitple students in each */

let courses = [
  {
    name: "mern",
    students: [
      {
        name: "ram",
        age: 10,
        phones: [
          {
            number: "98666.",
            provider: "ntc",
          },
          {
            number: "98666.",
            provider: "ncell",
          },
          {
            number: "98666.",
            provider: "smart",
          },
        ],
      },
      {
        name: "hari",
        age: 12,
      },
    ],
  },
  {
    name: "python",
    students: [
      {
        name: "ram",
        age: 10,
      },
      {
        name: "hari",
        age: 12,
      },
    ],
  },
];
