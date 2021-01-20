const dotenv = require('dotenv')
dotenv.config({path:'./config/config.env'})
const TelegramBot = require('node-telegram-bot-api')
const connectDb = require('./db')
const helper = require('./helper')


const bot = new TelegramBot(process.env.TOKEN,{polling:true})

connectDb()
helper.logStart()
