import React, { useState } from "react";
import Weather from "./Weather";
import Calendar from "./Calendar";
import "../styles/news.css";
import userPhoto from "../assets/images/profile-photo.jpg";
import techImage from "../assets/images/tech.jpg";
import sportsImage from "../assets/images/sports.jpg";
import scienceImage from "../assets/images/science.jpg";
import worldImage from "../assets/images/world.jpg";
import healthImage from "../assets/images/health.jpg";
import nationImage from "../assets/images/nation.jpg";
import axios from "axios";

const News = () => {
  const [headline, setHeadline] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const url = `https://gnews.io/api/v4/search?q=example&apikey=d95e47bdc2b24479dd044588bf1ab729`;
  }, []);

  return (
    <div className="news">
      <header className="news-header">
        <h1 className="logo">News & Blogs</h1>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search . . ." />
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
            <p>RichJsNomad's Blog</p>
          </div>
          <nav className="categories">
            <h1 className="nav-heading">Categories</h1>
            <div className="nav-links">
              <a href="" className="nav-link">
                General
              </a>
              <a href="" className="nav-link">
                World
              </a>
              <a href="" className="nav-link">
                Business
              </a>
              <a href="" className="nav-link">
                Technology
              </a>
              <a href="" className="nav-link">
                Entartainment
              </a>
              <a href="" className="nav-link">
                Sports
              </a>
              <a href="" className="nav-link">
                Science
              </a>
              <a href="" className="nav-link">
                Health
              </a>
              <a href="" className="nav-link">
                Nation
              </a>
              <a href="" className="nav-link">
                Bookmarks <i className="fa-regular fa-bookmark"></i>
              </a>
            </div>
          </nav>
        </div>
        <div className="news-section">
          <div className="headline">
            <img src={techImage} alt="headline img" />
            <h2 className="headline-title">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, est?
              <i className="fa-regular fa-bookmark bookmark"></i>
            </h2>
          </div>
          <div className="news-grid">
            <div className="news-grid-item">
              <img src={techImage} alt="sports Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={sportsImage} alt="sports Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={scienceImage} alt="science Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={worldImage} alt="world Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={healthImage} alt="health Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
            <div className="news-grid-item">
              <img src={nationImage} alt="nation Image" />
              <h3>
                Lorem ipsum dolor sit amet.{" "}
                <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
            </div>
          </div>
        </div>
        <div className="my-blogs">My blogs</div>
        <div className="weather-calendar">
          <Weather />
          <Calendar />
        </div>
      </div>
      <footer className="news-footer">
        <h3>©All rights reserved 2025</h3>
        <h3>Created by @RichJsNomad</h3>
      </footer>
    </div>
  );
};

export default News;
