import React, {Component} from 'react'


const router = require("express").Router();

const APIkey = 'kbvtlqxgtqEP4TbguBcbVICEbNTmsBy8f9r4owm6'
const googleApiKey= "AIzaSyDAyIPLZ0mcQHFSMR_UghLG1poEhHyXFGg"
console.log("test")
// //Premade totals
// const senate = "https://api.propublica.org/congress/v1/116/senate/members.json" + APIkey;
const house = "https://api.propublica.org/congress/v1/116/house/members.json" + APIkey;
consonle.log(house)
function apicall(){
    house(function(){
        fetch(url).then(function(res){
            return res.json();
            
        }).then(function(data){
            
            if('series' in data){
                allData[iso][type] = data['series'][0]['data'];
            }
            else allData[type] = [];
            
            //make array with blank years 
            
        });
    })
}




function generateResultsObject(){
  isoArray.forEach(function(iso){
      allData[iso] = {};
      
      types = Object.keys(FUEL_TYPE_IDS);
      types.forEach(function(type){
          var url = "https://api.propublica.org/congress/v1/116/senate/members.json?api_key="+ APIkey;
      
          //console.log(url);
          fetch(url).then(function(res){
              return res.json();
              
          }).then(function(data){
              
              if('series' in data){
                  allData[iso][type] = data['series'][0]['data'];
              }
              else allData[type] = [];
              
              //make array with blank years 
              
          });
          
      console.log(data, )
    });
    firstFewTypes = false;
  });
  //   return url
}


class Container extends Component {
    constructor() {
        super()
        this.state = {
           }
    }

    
    // router.get("/senators", (req, res) => {
    //   axios
    //     .get("https://api.propublica.org/congress/v1/116/senate/members.json", { params: req.query })
    //     .then(({ data: { results } }) => res.json(results))
    //     .catch(err => res.status(422).json(err));
    // });

    doFourSquare() {
        const url = 'https://api.propublica.org/congress/v1/116/senate/members.json' +
                    APIkey

        .get(url).query(null).
            set('Accept', 'text/json').
            end((error, response) => {
                const {} = response.body.response
                this.setState({})
            })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Container;
module.exports = router;







