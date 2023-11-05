/* initiate important variables */ 
const express   = require("express");
const mongoose  = require("mongoose");
const app       = express();
const dotenv    = require("dotenv").config();
/* run scheduler here */
const scheduler = require("./src/helper/scheduler.js"); 

/* load environtment variables from .ENV */ 
const PORT        = process.env.PORT || 3000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URL_PORT = process.env.DB_URL_PORT;

/* connect to mongo DB with mongoose */
const databaseURI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}${DB_URL_PORT}`

mongoose.connect(databaseURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
	console.log('Successfully, connect to MongoDB');
})
.catch(err => {
	console.error('Error connect to MongoDB ' + err);
});


/* listen app on port 3000 */
app.listen(PORT, () => {
	console.log(`Server is listened on port ${PORT}`);
});