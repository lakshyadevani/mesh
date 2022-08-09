
import mongoose from 'mongoose';

const Connection = async (username,password) => {
    try {   
        const URL = `mongodb://${username}:${password}@mesh2-shard-00-00.h3o37.mongodb.net:27017,mesh2-shard-00-01.h3o37.mongodb.net:27017,mesh2-shard-00-02.h3o37.mongodb.net:27017/?ssl=true&replicaSet=atlas-26et10-shard-0&authSource=admin&retryWrites=true&w=majority`
        await mongoose.connect(URL, { useNewUrlParser: true })
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
} 

export default Connection;  