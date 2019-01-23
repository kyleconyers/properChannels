import axios from "axios";

export default {
  // Gets books from the Google API
  getSenators: function() {
    var data = axios.get("/api/propublica/senators");
    console.log("DATA: ");
    console.log(data);
    return data;
  },
};