const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app= express();
app.use(express.json());

const MONGO_URI="MONGO_URI=mongodb://localhost:27017/eventsDB";
const PORT=3000;

mongoose.connect(MONGO_URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})

.then(()=>{
  console.log("Connecting to MongoDB");
})

.catch((error)=>{
  console.log(`Error coonnecting to MongoDB ${error}`);
})


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
