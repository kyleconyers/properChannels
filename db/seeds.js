/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
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

function seedForums() {
    const newForum = new Forum({
        name: "District 12"
    })
    newForum.save()
}

User.findOne().then( (resUser) => {
    // Seeds for messages

    Forum.findOne().then( (resForum) => {
 
        messageSeeds = [
            {
                forum_id: resForum._id,
                user_id: resUser._id,
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
        // seedForums();
        seedMessages();
    })
})