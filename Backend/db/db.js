const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://jhaveripriyank49:IDEg3OjdkSVx5iV1@cluster0.mtf8y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log('Db Connected')
    } catch (error) {
        console.log('DB Connection Error');
    }
}

module.exports = {db}