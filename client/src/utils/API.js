import axios from "axios";

export default {
  // Gets all examples
  // getExamples: function () {
  //   return axios.get("/api/example");
  // },
  // // Gets the example with the given id
  // getExample: function (id) {
  //   return axios.get(`/api/example/${id}`);
  // },
  // // Deletes the example with the given id
  // deleteExample: function (id) {
  //   return axios.delete(`/api/example/${id}`);
  // },
  // // Saves an example to the database
  // saveExample: function (exampleData) {
  //   return axios.post("/api/example", exampleData);
  // },

  //----------CSV-----------------------

  saveCSV: function (csvData) {
    return axios.post("/api/userIndex", csvData);
  },

  getCSV: function (csvData) {
    return axios.get("/api/userIndex", csvData);
  },

  savePopulate: function (populateData) {
    return axios.post("/api/populateduser", populateData)
  },


  //------USER--------
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  },

  //----------AUTHENTICATION---------------
  getUser: function (id) {
    return axios.get(`/api/authenticate/${id}`);
  },

  // login: function (userData) {
  //   return axios.post("/api/authenticate", userData);
  // },
  
  login: function (userData) {
    return axios.post("/api/login", userData);
  },

};
