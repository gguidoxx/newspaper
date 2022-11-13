const axios = require("axios");
const { Noticias } = require("../db");
const { Sequelize } = require("sequelize");
const { Op } = require("sequelize");

const getAllNews = async (req, res, next) => {
  try {
    let news = await axios.get(
      "https://newsapi.org/v2/top-headlines?language=es&pageSize=100&apiKey=2ec0bf1b68d34946aa0a05e97f16ca7d"
    );

    news = news?.data.articles.map((el) => {
      const obj = {
        title: el.title,
        author: el.author,
        url: el.url,
        description: el.description,
        image: el.urlToImage,
        source: el.source.name,
      };
      return obj;
    });
    let allNews = await Noticias.findAll();
    if (!allNews.length || allNews.length < 400)
      await Noticias.bulkCreate(news);

    if (allNews.length > 299) {
      let sliced = allNews.slice(1, 299);
      sliced.map(async (el) => {
        await Noticias.destroy({
          where: {
            title: el.title,
          },
        });
      });
      await Noticias.bulkCreate(news);
    }

    // //const categories

    const noticiasDb = await Noticias.findAll();
    res.json(noticiasDb);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllNews };
