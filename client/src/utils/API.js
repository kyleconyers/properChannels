import axios from "axios";

export default {
  // Gets books from the Google API
  getSenators: function() {
    var data = axios.get("/api/propublica/senators");
    console.log("DATA: ");
    console.log(data);
    return data;
  },

  
  // Gets all saved messages
  // getSavedMessage: function() {
  //   return axios.get("/api/message");
  // },

  getSavedMessageByForumAndTag: function(forum_id, tag){
    return axios.get(`/api/message?forum_id=${forum_id}&tag=${tag}`);
  },

  // Deletes the saved message with the given id
  deleteMessage: function(id) {
    return axios.delete("/api/message/" + id);
  },

  // Saves an Messages to the database
  saveMessage: function(messageData) {
    return axios.post("/api/message", messageData);
  },



  // Gets all saved forums
  getSavedForum: function(name) {
    return axios.get(`/api/forum?name=${name}`);
  },

  // Deletes the saved forum with the given id
  deleteForum: function(id) {
    return axios.delete("/api/forum/" + id);
  },

  // Saves an forum to the database
  saveForum: function(forumData) {
    return axios.post("/api/forum", forumData);
  }


};