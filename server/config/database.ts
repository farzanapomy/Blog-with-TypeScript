import mongoose from 'mongoose'

const URI = process.env.MONGODB_URL

mongoose.connect(`${URI}`)
    .then(() => {
        console.log('Mongodb connection')
    }), (err: string) => {
        if (err) throw err;
    }