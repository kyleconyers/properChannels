 /* Mongo Database
* - this is where we set up our connection to the mongo database
*/
var usStates= {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
}

var stateAbbr = Object.keys(usStates);
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/properchannels'

const User = require('./models/user')
const Forum = require('./models/forum')
const Message = require('./models/message')

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_LOCAL_URL, {useNewUrlParser: true}) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// should mongoose.connection be put in the call back of mongoose.connect???
const dbConnection = mongoose.connection
dbConnection.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})

dbConnection.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
    )
    // Get list of collections and convert to array of collection names
    dbConnection.db.listCollections()
    .toArray()
    .then( collections => {
        const collectionNames = collections.map( collection => collection.name )
        console.log(`COLLECTIONS: ${collectionNames}`)
        return collectionNames
    })
    .then( names => {
        // Create promises for dropping existing tables if they exist
        const dropPromises = []
        if (names.includes("messages")) {
            dropPromises.push( Message.collection.drop() )
        }
        if (names.includes("forums")) {
            dropPromises.push( Forum.collection.drop() )
        }

        console.log()
        console.log("DROPPING EXISTING TABLES")

        // Wait for all drop promises to resolve
        Promise.all(dropPromises)
        .then( () => {
            console.log("TABLES DROPPED")
            console.log()
            console.log("SEEDING FORUMS")
        })
        .then(seedForums)
        .then( ()=> {
            console.log("FORUMS SEEDED")
            // ASSUMES EXISTING USER LIST
            // WILL NOT SEED USERS
            User.findOne().then( (resUser) => {
                // Seeds for messages
            
                Forum.findOne().then( (resForum) => {
             
                    messageSeeds = [
                        {
                            forum_id: '5c53970597a7e8148381a6b9',
                            user_id: resUser._id,
                            content: "Fix our governement",
                            date: new Date()
                        }, 
                        {
                            forum_id: resForum._id,
                            user_id: resUser._id,
                            content: "Make America great again!!!!!",
                            date: new Date()
                        },
                        {
                            forum_id: resForum._id,
                            user_id: resUser._id,
                            content: "Border Security!",
                            date: new Date()
                        }, 
                        {
                            forum_id: resForum._id,
                            user_id: resUser._id,
                            content: "I want free public healthcare!",
                            date: new Date()
                        }, 
                    ]

                    console.log()
                    console.log("SEEDING MESSAGES")
                    seedMessages(messageSeeds)
                        .then(() => mongoose.disconnect())
                        .then(() => console.log("MESSAGES SEEDED"))
                })
            })
        })
    })
})


// // Seeds for users
// userSeeds = [
//     {
//         local: {
//             username: "SEEDED4"
//         }
//     },
//     {
//         local: {
//             username: "SEEDED5"
//         }
//     },
//     {
//         local: {
//             username: "SEEDED6"
//         }
//     }
// ]
// 
// function seedUsers( i=0) {
//     if (i < userSeeds.length) {
//         const newUser = new User(userSeeds[i])
//         newUser.save().then( () => seedUsers( i+1) )
//     } else {
//         seedMessages()
//     }
// }

function seedForums() {
    // const newForum = new Forum({
    //     name: "WA"
    // })
    // return newForum.save()
    stateAbbr.map(usState => {
        let newForum = new Forum({
            name: usState
        })
        return newForum.save();
    })
}


function seedMessages(messageSeeds, i=0) {
    console.log(`MESSAGE i: ${i}`)
    
    const newMessage = new Message(messageSeeds[i])
    return newMessage.save().then( () => {
        if (i < messageSeeds.length-1) {
            return seedMessages(messageSeeds, i+1)
        }

        else {
            return new Promise((resolve, reject) => {
                console.log( "NO MORE MESSAGES");
                resolve()
            })
        }
    } )  
}