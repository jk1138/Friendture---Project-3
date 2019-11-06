import axios from "axios";

export default {
  getPosts: function () {
    return axios.get("/api/posts");
  },

  findUser: function (userData) {
    return axios.post("/api/users/login", userData);
  },

  findUsers: function (userData) {
    return axios.get("/api/users", userData);
  },

  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);
  },

  // getComments: function (commentData) {
  //   return axios.post("/api/comment/grab", commentData);
  // },
  // postComment: function (commentData) {
  //   console.log(commentData);
  //   return axios.post("/api/comment/release", commentData);
  // }
};