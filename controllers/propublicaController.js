const axios = require("axios");


// Defining methods for the googleController

// findAll searches the Google Books API and returns only the entries we haven't already saved

// It also makes sure that the books returned from the API all contain a title, author, link, description, and image
const propublica = axios.create({
    baseURL: 'https://api.propublica.org/congress/v1/116/senate/members.json',
    headers:{
        'X-API-Key': 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'
    }
});

function getSenators() {
    return propublica.get('116/senate/members.json')
}

function getSenators(req, res, next) {
    axios.all([getSenators])
    .then(axios.spread((senators)=> {
        console.log(senators.data.results);
        res.data = senators.data;
    }))
}
module.exports ={ 
    getSenators
}

// module.exports = {

//   findAll: function(req, res) {
//     const { query: params } = req;
//     axios
//       .get("https://api.propublica.org/congress/v1/115/senate/members.json", {
//         params
//       })
//       .then(results =>
//         results.data.items.filter(
//           result =>
//             result.volumeInfo.title &&
//             result.volumeInfo.infoLink &&
//             result.volumeInfo.authors &&
//             result.volumeInfo.description &&
//             result.volumeInfo.imageLinks &&
//             result.volumeInfo.imageLinks.thumbnail
//         )
//       )
//       .then(apiBooks =>
//         db.Book.find().then(dbBooks =>
//           apiBooks.filter(apiBook =>
//             dbBooks.every(dbBook => dbBook.googleId.toString() !== apiBook.id)
//           )
//         )
//       )
//       .then(books => res.json(books))
//       .catch(err => res.status(422).json(err));
//   }
// };