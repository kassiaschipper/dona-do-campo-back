import { notFoundError } from "../../errors/not-found-error.js";
import newsRepository from "../../repositories/news-repository.js";

async function getNews() {
    const registrationInfo = await newsRepository.findNews();

    if(!registrationInfo){
        throw notFoundError();
    }
    return registrationInfo;
}

async function postNews(title:string, content:string, createAt: Date) {
    
    const NewsData = {
        title, 
        content,   
        createAt,     
    };

    const insertNews = await newsRepository.createNews(NewsData);

    return insertNews
 }

const newsService = {
    getNews,   
    postNews
};

export default newsService;