const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/friendlistAppTest"
);

const postSeed = [
  {
    title: "Went to Movies!",
    body: "We went and saw Zombieland on Friday",
    pic: "https://i1.wp.com/splashreport.com/wp-content/uploads/2018/05/Zombieland.jpg?fit=900%2C540",
    date: "10/25/2019",
    user: "CMac",
    reactions: []
  },
];

db.Post
  .remove({})
  .then(() => db.Post.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
