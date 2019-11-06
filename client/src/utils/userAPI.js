import axios from "axios";

export default {
    getUsers: function () {
        return axios.get("/api/users");
    },

    saveUsers: function (userData) {
        return axios.post("/api/users", userData);
    },

    updateUsers: function (email, userData) {
        return axios.put("/api/users/" + email, userData)
    },

    getUserbyEmail: function (email){
        return axios.get("/api/users/" + email);
    }
}