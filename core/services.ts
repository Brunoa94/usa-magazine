import { Article } from "./models/article";

export default class Services{
    private apiKey: string;

    constructor(apiKey: string){
        this.apiKey = apiKey;
    }

    public async getHeadlines(category?: string, country?: string){
        const url = `https://newsapi.org/v2/top-headlines?pageSize=100&country=${country}&apiKey=${this.apiKey}${category ? `&category=${category}` : ''}`;
        const result = await this.makeCall(`/responses/${category ? category : "general"}.json`);
        const articles = (result["articles"] as Article[]).filter(item => {
            return (item.author !== null && item.title !== null && item.urlToImage !== null)
        });
        
        return articles;
    }

    public async getRandom(query: string){
        const url = `https://newsapi.org/v2/everything?pageSize=100&apiKey=${this.apiKey}&q=${query}`;
   
        const result = await this.makeCall(url);
        const articles = (result["articles"] as Article[]).filter(item => {
            return (item.author !== null && item.title !== null && item.urlToImage !== null)
        });
        
        return articles;
    }

    private async makeCall(url: string){
        const result = await fetch(url, { next: { revalidate: 3600 } });
        
        return result.json();
    }
}
