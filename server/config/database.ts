// import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL

// mongoose.connect(`${URI}`, {
//    useCreateIndex: true,
//  useFindAndModify: false,
// useNewUrlParser: true,
// useUnifiedTopology: true
// }, (err) => {
//     if (err) throw err;
//     console.log('Mongodb connection')
// })


const mongoose = require("mongoose");

mongoose
  .connect(`${URI}`)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err: any) => {
    console.log(err);
  });



