import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL




// mongoose
//   .connect(`${URI}`)
//   .then(() => console.log("DB Connection Successfully!"))
//   .catch((err) => {
//     console.log(err);
//   });








mongoose.connect(`${URI}`)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err: any) => {
    console.log(err);
  });



