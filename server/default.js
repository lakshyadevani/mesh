import Article from './model/article-schema.js';
import { data } from './constants/data.js';

const DefaultData = async () => {
    try {
        await Article.insertMany(data);
        console.log('Data imported Successfully');
        
    } catch (error) {
        console.log('Error: ', error.message);
    }
}
export default DefaultData;   