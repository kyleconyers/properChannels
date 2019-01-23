const axios = require("axios");
//https://www.googleapis.com/civicinfo/v2/representatives?address=98122&includeOffices=true&key=AIzaSyDAyIPLZ0mcQHFSMR_UghLG1poEhHyXFGg
const address = 98112;

module.exports = {
    
  findAllSenators: function(req, res) {
    const { query: params } = req;
    axios({
        method: 'get',
        baseURL: 'https://www.googleapis.com/civicinfo/v2/representatives?address=' + address + '&includeOffices=true&key=AIzaSyDcWHi9S53xufSyLPl8JEPkj3AVU2GqrK0',
        // headers: {'X-API-Key': 'AIzaSyDAyIPLZ0mcQHFSMR_UghLG1poEhHyXFGg'}
      }).then(res => {
        // do something with data
        console.log('api response: ', res.data)
      })
      
      //.catch(err => res.status(422).json(err));

      .catch(err => {console.log("ERROR:"); console.log(err)});
  },

//   findAllHouse: function(req, res) {
//     const { query: params } = req;
//     axios({
//         method: 'get',
//         baseURL: 'https://www.googleapis.com/civicinfo/v2/elections',
//         headers: {'X-API-Key': 'AIzaSyDAyIPLZ0mcQHFSMR_UghLG1poEhHyXFGg'}
//       }).then(res => {
//         // do something with datad
//         console.log('api response: ', res.data)
//       })
      
//       .catch(err => res.status(422).json(err));
//   },
  


    

};