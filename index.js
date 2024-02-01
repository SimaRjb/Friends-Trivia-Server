const express = require("express");
const cors = require("cors"); 
const friendsRoute = require("./routes/friends");


// const friendsData = require("./data/friends-quotes.json");

const app = express();

app.use(cors()); // let react apps access this API
app.use(express.json()); // give access to POST data (req.body)
require('dotenv').config()
const {API_KEY, PORT, BASE_URL} = process.env;


app.use("/", (req, res, next) => {
    if(!req.query.api_key) return res.status(401).json({message: "You need an API Key"});
    const isValid = req.query.api_key === API_KEY;
    if(!isValid) return res.status(401).json({message: "Invalid API Key"});
    next();
  })

// app.use("https://api.friendshackathon.com/", friendsRoute);
app.use("/", friendsRoute);

app.listen(PORT, (req, res) =>{
    console.log("listeing at port")
})

