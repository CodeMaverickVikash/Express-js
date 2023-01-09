const express = require('express'); // this package is used in web development fix routing problem in node js if/else
const path = require('path') // path module included

const app = express();
const hostname = '127.0.0.1';
const port = 8000;

// Express specific stuff/configuration
app.use('/static', express.static('static')); // For serving static files

// Pug specific stuff
app.set('view engine', 'pug') // set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // set the views directory

// ENDPOINT
app.get("/", (req, res)=>{
    const con = "Hello this is vikash here to help you contact me you have any query related to coding";
    const params = {'title' : "pubg is the best game", 'content' : con};
    res.status(200).render('index', params);
})

// app.get("/demo", (req, res)=>{
//     res.status(200).render('demo', {title : "vikash", message : "Hello there how are you"});
// });

// app.get("/", (req, res)=>{
//     res.send("hello world");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page");
// });

// Start the server
app.listen(8000, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
// api
// get - read
// post - create
// put - update
// delete - delete