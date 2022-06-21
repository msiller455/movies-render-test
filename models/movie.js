const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        default: function() {
            return new Date().getFullYear()
        },
    },
    mpaaRating: {
        type: String,
        enum: ['G', 'PG', 'PG-13', 'R']
    },
    cast: [String],
    nowShowing: { 
        type: Boolean,
        default: false
    }
}, {
    timestamps: true 
})

module.exports = mongoose.model('Movie', movieSchema)