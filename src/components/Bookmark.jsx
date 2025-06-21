import React from "react";
import "../styles/bookmark.css";
import "../styles/newsModal.css";
import demoImg from "../assets/images/demo.jpg";

const Bookmark = ({
  show,
  onClose,
  bookmarks,
  onSelectArticles,
  onDeleteBookmark,
}) => {
  if (!show) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span
          className="close-button"
          onClick={() => {
            onClose();
          }}
        >
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">Мои Закладки</h2>
        <div className="bookmarks-list">
          {bookmarks.map((article, index) => (
            <div
              className="bookmark-item"
              key={index}
              onClick={() => onSelectArticles(article)}
            >
              <img
                src={article?.image || demoImg}
                alt="нет изобр."
                onError={(e) => {
                  e.currentTarget.src = demoImg;
                }}
              />
              <h3>{article?.title}</h3>
              <span
                className="delete-button"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteBookmark(article);
                }}
              >
                <i className="fa-regular fa-circle-xmark"></i>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
