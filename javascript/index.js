// let websiteUrl = "https://mindrises-development.vercel.app";
let websiteUrl = "https://mindrisers.com.np/";

let blogs = [
  {
    title: "Web Designing Training in Putalisadak, Kathmandu",
    image:
      "/static/Images/blog/single_post/Web_Designing_Training_in_Putalisadak_Kathmandu.jpg",
  },
  {
    title: "Graphic Designing Training in Putalisadak, Kathmandu | Mindrisers",
    image:
      "/static/Images/blog/single_post/Graphic_Designing_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
  },
  {
    title:
      "Data Science with Python Training in Putalisadak, Kathmandu | Mindrisers",
    image:
      "/static/Images/blog/single_post/Data_Science_with_Python_Training_in_Putalisadak_Kathmandu.jpg",
  },
  {
    title: "UI/UX Training in Putalisadak, Kathmandu | Mindrisers",
    image:
      "/static/Images/blog/single_post/UIUX_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
  },
  {
    title: "Flutter Training in Putalisadak, Kathmandu | Mindrisers",
    image:
      "/static/Images/blog/single_post/Flutter_Training_in_Putalisadak_Kathmandu_Mindrisers.png",
  },
  {
    title: "DevOps Training in Putalisadak, Kathmandu | Mindrisers",
    image:
      "/static/Images/blog/single_post/DevOps_Training_in_Putalisadak_Kathmandu__Mindrisers.png",
  },
];

/* TODO: code here . each image in blogs should have websiteUrl attached in its prefix   */
// console.log(blogs);

function makeFullUrl(suffixUrl) {
  return `${websiteUrl}${suffixUrl}`;
}

for (let index = 0; index < blogs.length; index++) {
  //   let fullUrl = `${websiteUrl}${blogs[index].image}`;
  
  let fullUrl = makeFullUrl(blogs[index].image);
  console.log(fullUrl);

  //   blogs[index].image = makeFullUrl(blogs[index].image)
}

let courses = [
  {
    title: "MERN Stack Training in Nepal",
    image: "/static/Images/courses/banner/mern-banner-min_nplbrgN.jpg",
  },
  {
    title: "Python with Django Training in Nepal",
    image: "/static/Images/courses/banner/python-banner-min_7hCoIdR.jpg",
  },
  {
    title: "Digital Marketing Training in Nepal",
    image:
      "/static/Images/courses/banner/DIGITAL-MARKETING-banner-min_JBHENk4.webp",
  },
  {
    title: "Quality Assurance Training in Nepal",
    image: "/static/Images/courses/banner/qa-banner-min_l0DzbAP.jpg",
  },
  {
    title: "Graphic Design Training in Nepal",
    image: "/static/Images/courses/banner/banner11-min_6ANDad7.png",
  },
  {
    title: "Flutter Training in Nepal",
    image: "/static/Images/courses/banner/flutter-banner-min_DUDTPdH.jpg",
  },
  {
    title: "DevOps Training in Nepal",
    image: "/static/Images/courses/banner/DevOps_Training.png",
  },
];


for (let index = 0; index < courses.length; index++) {
    //   let fullUrl = `${websiteUrl}${courses[index].image}`;

    //   let fullUrl = makeFullUrl(courses[index].image);
    //   console.log(fullUrl);

    courses[index].image = makeFullUrl(courses[index].image)
}
