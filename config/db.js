const { mongoose } = require("mongoose")
const mangoose = require("mongoose")
const MONGO_URL = `mongodb+srv://dilipsinghf:7665135229@cluster0.bk0q22z.mongodb.net/?retryWrites=true&w=majority`
const connection = mongoose.connect(MONGO_URL)


module.exports = {connection}