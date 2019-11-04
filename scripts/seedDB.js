const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendlistAppTest"
);


const userSeed = [
  {
    firstname: "Colin",
    lastname: "McMahon",
    fullname: "Colin McMahon",
    email: "cmcmahon@email.email",
    posts: [
      {
      title: "Went to Movies!",
      body: "We went and saw Zombieland on Friday",
      pic: "https://i1.wp.com/splashreport.com/wp-content/uploads/2018/05/Zombieland.jpg?fit=900%2C540",
      date: "10/25/2019",
      user: "CMac",
      reactions: []
    },
    {
      title: "Went Camping",
      body: "My friends and I went to The Poconos and spent the night in the woods.",
      pic: "https://cdn.hiconsumption.com/wp-content/uploads/2019/07/Best-Affordable-Camping-Gear-000-Hero.jpg",
      date: "11/03/2019",
      user: "CMac",
      reactions: []
    }
  ],
    trophies:[]
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
