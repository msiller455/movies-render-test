// seed.js (a utility to seed/initialize the database)

// Uncomment the next line if using a .env to hold the db connection string
require('dotenv').config();

// Connect to the db
require('./config/database')

const Movie = require('./models/movie')
const Performer = require('./models/performer')

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data')


// HOW TO DELETE SEQUENCIALLY
// // The argument is a query object
// Movie.deleteMany({})
// // The cb provided to the .then does not use the error-first signature
// // use .catch instead to deal with errors
// .then(function(results) {
//     // results will be whatever the promise
//     // returned by the deleteMany method resolves to
//     console.log('Deleted movies: ', results)
//     // process.exit() immediately exits a Node program
//     return Performer.deleteMany({})
// })
// .then(function(results) {
//     console.log('Deleted performers: ', results)
//     process.exit()
// })

// HOW TO DELETE IN PARALLEL

const p1 = Movie.deleteMany({})
const p2 = Performer.deleteMany({})
Promise.all([p1, p2])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Performer.create(data.performers),
        Movie.create(data.movies)
    ])
})
.then(function(result) {
    return Promise.all([
        Performer.findOne({name: 'Mark Hamill'}),
        Movie.findOne({title: 'Star Wars - A New Hope'})
    ])
})
.then(function(results) {
    const mark = results[0]
    const starWars = results[1]
    starWars.cast.push(mark)
    return starWars.save()
})
.then(process.exit)















/*--- NOTES ON PROMISES ----- */
// const p = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         reject('Hello World!')
//     }, 2000)
// })

// p.then(function(result) {
//     console.log(result)
//     return "Yo whats up!"
// }).then(function(result) {
//     console.log(result)
//     return "Done!"
// }).then(function(result) {
//     return result
// }).catch(function(err) {
//     console.log(err)
// })

// function asyncAdd(a, b, delay) {
//     return new Promise(function(resolve) {
//       setTimeout(function() {
//         resolve(a + b);
//       }, delay);
//     });
// }

// asyncAdd(5, 10, 2000)
// .then(function(sum) {
//   console.log(sum);
//   return asyncAdd(sum, 100, 1000);
// })
// .then(function(sum) {
//   console.log(sum);
//   return asyncAdd(sum, 1000, 2000);
// })
// .then(function(sum) {
//   console.log(sum);
// });