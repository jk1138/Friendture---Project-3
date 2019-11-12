const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendlistAppTest"
);


const userSeed = [
  {
    fullname: "Colin McMahon",
    email: "cmcmahon1012@gmail.com",
    posts: [
      {
        title: "Went to Movies!",
        body: "We went and saw Zombieland on Friday",
        pic: "https://i1.wp.com/splashreport.com/wp-content/uploads/2018/05/Zombieland.jpg?fit=900%2C540",
        date: "10/25/2019",
        user: "Colin McMahon",
      },
      {
        title: "Went Camping",
        body: "My friends and I went to The Poconos and spent the night in the woods.",
        pic: "https://cdn.hiconsumption.com/wp-content/uploads/2019/07/Best-Affordable-Camping-Gear-000-Hero.jpg",
        date: "11/03/2019",
        user: "Colin McMahon",
      }
    ],
    trophies: ["pizza", "movies"]
  },
  {
    fullname: "Billy Bob",
    email: "Billy@bob.email",
    posts: [
      {
        title: "Went to the Gym!",
        body: "We went got in a workout",
        pic: "https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/73f775a6-0ceb-11e8-8eb7-42f857ea9f09?source=next&fit=scale-down&quality=highest&width=1440",
        date: "10/25/2019",
        user: "Billy Bob",
      },
      {
        title: "Met up with some friends",
        body: "Met the gang!",
        pic: "https://scontent-iad3-1.cdninstagram.com/vp/3650bccab1e154be0de8e4c686eede3d/5E4CE4D3/t51.2885-15/e35/p1080x1080/70777698_601477490388334_6333729180293366273_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=1",
        date: "11/03/2019",
        user: "Colin McMahon",
      }
    ],
    trophies: ["gym", "selfie"]
  },
];

  db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
