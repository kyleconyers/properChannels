/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose')
mongoose.Promise = global.Promise
let MONGO_URL
const MONGO_LOCAL_URL = 'mongodb://localhost/properchannels'

const User = require('./models/user')
const Message = require('./models/messages')

if (process.env.MONGODB_URI) {
	mongoose.connect(process.env.MONGODB_URI)
	MONGO_URL = process.env.MONGODB_URI
} else {
	mongoose.connect(MONGO_LOCAL_URL) // local mongo url
	MONGO_URL = MONGO_LOCAL_URL
}

// should mongoose.connection be put in the call back of mongoose.connect???
const db = mongoose.connection
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`)
})
db.once('open', () => {
	console.log(
		`You have successfully connected to your mongo database: ${MONGO_URL}`
	)
})

// Seeds for users
userSeeds = [
    {
        local: {
            username: "SEEDED4"
        }
    },
    {
        local: {
            username: "SEEDED5"
        }
    },
    {
        local: {
            username: "SEEDED6"
        }
    }
]

function seedUsers( i=0) {
    if (i < userSeeds.length) {
        const newUser = new User(userSeeds[i])
        newUser.save().then( () => seedUsers( i+1) )
    } else {
        seedMessages()
    }
}

// Seeds for messages

messageSeeds = [
    {
        // forum: "DISTRICT  41",
        content: "Fix our governement",
        date: new Date()
    }
]

function seedMessages( i=0) {
    if (i < messageSeeds.length) {
        const newMessage = new Message(messageSeeds[i])
        newMessage.save().then( () => seedMessages( i+1) )
    } else {
        mongoose.disconnect()
    }
}


// Start seeding here
// seedUsers();
seedMessages();