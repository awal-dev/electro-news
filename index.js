const NewsAPI = require('newsapi')
const newsapi = new NewsAPI('5f76816c682347fcaf036685a0f95851')


newsapi.v2.topHeadlines({
    category: 'business',
    language: 'en',
    country: 'us'
}).then((results) => {
    console.log(results.articles)
}).catch((err) => {
    console.log(err)
})