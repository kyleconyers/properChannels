import axios from "axios";

export default {
  // Gets books from the Google API
  getSenators: function(q) {
    return axios.get("/api/propublica/senators");
  },
};