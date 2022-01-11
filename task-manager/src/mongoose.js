const mongoose = require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true
})

const User = mongoose.model('user', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

const me = new User({name: "Gaurang Delavadiya", age: 22})

me.save().then(() => {
    console.log("Saved your name", me);
}).catch((error) => {
    console.log("Error!", error);
}) 