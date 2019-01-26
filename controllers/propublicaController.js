const axios = require("axios");



module.exports = {

  findAllSenators: function(req, res) {
    const { query: params } = req;
    axios({
        method: 'get',
        baseURL: 'https://api.propublica.org/congress/v1/116/senate/members.json',
        headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
      }).then(res => 
        
        {
        // do something with data
        console.log('api response: ', res.data.results)
      })
      
      .catch(err => res.status(422).json(err));
  },

  findAllHouse: function(req, res) {
    const { query: params } = req;
    axios({
        method: 'get',
        baseURL: 'https://api.propublica.org/congress/v1/116/house/members.json',
        headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
      }).then(res => {
        // do something with data
        console.log('api response: ', res.data.results)
      })
      
      .catch(err => res.status(422).json(err));
  },

  findAllSenateCommittees: function(req, res) {
    const { query: params } = req;
    axios({
        method: 'get',
        baseURL: 'https://api.propublica.org/congress/v1/116/senate/committees.json',
        headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
      }).then(res => 
        
        {
        // do something with data
        console.log('api response: ', res.data.results)
      })
      
      .catch(err => res.status(422).json(err));
  },

  findAllHouseCommittees: function(req, res) {
    const { query: params } = req;
    axios({
        method: 'get',
        baseURL: 'https://api.propublica.org/congress/v1/116/house/committees.json',
        headers: {'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'}
      }).then(res => 
        
        {
        // do something with data
        console.log('api response: ', res.data.results)
      })
      
      .catch(err => res.status(422).json(err));
  },
  
};