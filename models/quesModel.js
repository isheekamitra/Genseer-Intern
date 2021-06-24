const mongoose = require('mongoose')


const quesSchema = new mongoose.Schema({
    user_id: {
        type: String,
        
    },
    question: {
        type: String,
        required: [true, "Please enter question!"],
        trim: true,
    },
}, {
    timestamps: true
})

module.exports = mongoose.model("Questions", quesSchema)