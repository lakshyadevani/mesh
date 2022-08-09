import Article from "../model/article-schema.js"

export const getArticles = async (request, response) =>{
    try{
        let data = await Article.find({});
        response.status(200).json(data);
    }catch(error){
        response.status(500).json({message : date.message});
    }
}