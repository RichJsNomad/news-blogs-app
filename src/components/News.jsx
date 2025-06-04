import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "../styles/news.css";
import userPhoto from "../assets/images/profile-photo.jpg";
import defaultImg from "../assets/images/defaultImg.jpg";

import axios from "axios";

const categories = [
  "general",
  "world",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
  "nation",
];

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("general");

  useEffect(() => {
    const fetchNews = async () => {
      const url = ` https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=ru&apikey=d95e47bdc2b24479dd044588bf1ab729`;

      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = defaultImg;
        }
      });

      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
      console.log(fetchedNews[0]);
    };

    fetchNews();
  }, [selectedCategory]);

  const handleClickCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">Новости & Блоги</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Поиск . . ." />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <img src={userPhoto} alt="User Img" />
            <p>RichJsNomad Блог</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Категории</h1>
            <div className="nav-links">
              <a
                href=""
                className="nav-link"
                onCklick={(e) => handleClickCategory(e, "general")}
              >
                Общее
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "world")}
              >
                В мире
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "business")}
              >
                Бизнес
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "technology")}
              >
                Технологии
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "entertainment")}
              >
                Развлечения
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "sports")}
              >
                Спорт
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "science")}
              >
                Наука
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "health")}
              >
                Здоровье
              </a>
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "nation")}
              >
                Общество
              </a>
              <a href="" className="nav-link">
                Закладки <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">
            <img
              src={headline?.image || defaultImg}
              alt={headline?.title}
              onError={(e) => (e.currentTarget.src = defaultImg)}
            />
            <h2 className="headline-title">{headline?.title}</h2>
            <i className="fa-regular fa-bookmark bookmark"></i>
          </div>
          <div className="news-grid">
            {news.map((article, index) => (
              <div className="news-grid-item" key={index}>
                <img
                  src={article?.image || defaultImg}
                  alt={article?.title}
                  onError={(e) => (e.currentTarget.src = defaultImg)}
                />
                <h3>
                  {article?.title}
                  <i className="fa-regular fa-bookmark bookmark"></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <div className="my-blogs">Мои Блоги</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">
        <h3>©Все права защищены 2025</h3>
        <h3>Создано @RichJsNomad-ом</h3>
      </footer>
    </div>
  );
};

export default News;
