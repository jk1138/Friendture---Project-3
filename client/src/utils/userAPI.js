import axios from "axios";

export default {
    getUsers: function(){
        return axios.get("/api/users");
    },

    saveUsers: function(userData) {
        return axios.post("/api/users", userData);
      }
}