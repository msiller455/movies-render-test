const Movie = require('../models/movie');

module.exports = {
  create
};

function create(req, res) {
    Movie.findById(req.params.id, function(err, movie) {
        // We can push subdocs into Mongoose arrays
        movie.reviews.push(req.body)
        // save any changes to the parent doc
        movie.save(function(err) {
            // respond to the request in this case, we'll redirect
            res.redirect(`/movies/${movie._id}`)
        })
    })
}