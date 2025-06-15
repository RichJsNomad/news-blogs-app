import React from "react";
import "../styles/bookmark.css";
import "../styles/newsModal.css";
import demoImg from "../assets/images/demo.jpg";

const Bookmark = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">Мои Закладки</h2>
        <div className="bookmarks-list">
          <div className="bookmark-item">
            <img src={demoImg} alt="img" />
            <h3>some random title text</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImg} alt="img" />
            <h3>some random title text</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImg} alt="img" />
            <h3>some random title text</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
