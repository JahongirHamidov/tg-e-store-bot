const mongoose = require('mongoose')


// mongoose.Promise = global.Promise
const connectDb = async () => {
    const conn = mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log('DB Connected')        
}

module.exports = connectDb