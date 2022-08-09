import mongoose from 'mongoose';


const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    speaker: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: String, 
        required: true
    },
    link: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
});

const article = mongoose.model('article', articleSchema);

export default article;