import React, { useState, useEffect } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "../styles/news.css";
import userPhoto from "../assets/images/profile-photo.jpg";
import defaultImg from "../assets/images/defaultImg.webP";
import NewsModal from "./NewsModal";
import Bookmark from "./Bookmark";

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
  const [searchInput, setSearchInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [bookmarks, setBookmarks] = useState([]);
  const [showBookmarkModal, setShowBookmarkModal] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      let url = ` https://gnews.io/api/v4/top-headlines?category=${selectedCategory}&lang=ru&apikey=d95e47bdc2b24479dd044588bf1ab729`;

      if (searchQuery) {
        url = ` https://gnews.io/api/v4/search?q=${searchQuery}&lang=ru&apikey=d95e47bdc2b24479dd044588bf1ab729`;
      }

      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if (!article.image) {
          article.image = defaultImg;
        }
      });

      setHeadline(fetchedNews[0]);
      setNews(fetchedNews.slice(1, 7));
      const savedBookmarks =
        JSON.parse(localStorage.getItem("bookmarks")) || [];
      setBookmarks(savedBookmarks);
    };

    fetchNews();
  }, [selectedCategory, searchQuery]);

  const handleClickCategory = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    setSearchInput("");
  };

  const handleArticle = (article) => {
    setSelectedArticle(article);
    setShowModal(true);
  };

  const handleBookmarkClick = (article) => {
    if (bookmarks.some((item) => item.title === article.title)) {
      setBookmarks(bookmarks.filter((item) => item.title !== article.title));
      localStorage.setItem(
        "bookmarks",
        JSON.stringify(bookmarks.filter((item) => item.title !== article.title))
      );
    } else {
      setBookmarks([...bookmarks, article]);
      localStorage.setItem(
        "bookmarks",
        JSON.stringify([...bookmarks, article])
      );
    }
  };

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">Новости & Блоги</h1>
        <div className="search-bar">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Поиск . . ."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </header>
      <div className="news-content">
        <div className="navbar">
          <div className="user">
            <a href="https://www.instagram.com/richjsnomad/" target="blank">
              <img src={userPhoto} alt="User Img" />
              <p>RichJsNomad's Insta</p>
            </a>
          </div>

          <nav className="categories">
            <h1 className="nav-heading">Категории</h1>
            <div className="nav-links">
              <a
                href=""
                className="nav-link"
                onClick={(e) => handleClickCategory(e, "general")}
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
              <a
                href="#"
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBookmarkModal(true);
                }}
              >
                Закладки <i className="fa-solid fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline" onClick={() => handleArticle(headline)}>
            <img
              src={headline?.image || defaultImg}
              alt={headline?.title}
              onError={(e) => (e.currentTarget.src = defaultImg)}
            />
            <h2 className="headline-title">{headline?.title}</h2>
            <i
              className={`${
                bookmarks.some((bookmark) => bookmark.title === headline?.title)
                  ? "fa-solid"
                  : "fa-regular"
              } fa-bookmark bookmark`}
              onClick={(e) => {
                e.stopPropagation();
                handleBookmarkClick(headline);
              }}
            ></i>
          </div>
          <div className="news-grid">
            {news.map((article, index) => (
              <div
                className="news-grid-item"
                key={index}
                onClick={() => handleArticle(article)}
              >
                <img
                  src={article?.image || defaultImg}
                  alt={article?.title}
                  onError={(e) => (e.currentTarget.src = defaultImg)}
                />
                <h3>
                  {article?.title}
                  <i
                    className={`${
                      bookmarks.some(
                        (bookmark) => bookmark.title === article.title
                      )
                        ? "fa-solid"
                        : "fa-regular"
                    } fa-bookmark bookmark`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookmarkClick(article);
                    }}
                  ></i>
                </h3>
              </div>
            ))}
          </div>
        </div>
        <NewsModal
          show={showModal}
          article={selectedArticle}
          onClose={() => setShowModal(false)}
        />
        <Bookmark
          show={showBookmarkModal}
          bookmarks={bookmarks}
          onClose={() => setShowBookmarkModal(false)}
          onSelectArticle={handleArticle}
          onDeleteBookmark={handleBookmarkClick}
        />
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
