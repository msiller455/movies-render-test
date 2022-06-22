const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
}) 

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
    cast: [{type: Schema.Types.ObjectId, ref: 'Performer'}],
    nowShowing: { 
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, {
    timestamps: true 
})

module.exports = mongoose.model('Movie', movieSchema)