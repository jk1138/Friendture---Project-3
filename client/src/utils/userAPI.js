import axios from "axios";

export default {
    getUsers: function(){
        return axios.get("/api/users");
    },

    saveUsers: function(userData) {
        return axios.post("/api/users", userData);
      },

      updateUsers: function(userData) {
          return axios.put("/api/users", userData)
      }
}