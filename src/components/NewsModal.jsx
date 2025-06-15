import React from "react";
import demoImg from "../assets/images/demo.jpg";
import defaultImg from "../assets/images/defaultImg.webP";
import "../styles/newsModal.css";

const NewsModal = ({ show, article, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={() => onClose()}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img
          src={article?.image || defaultImg}
          alt="modal-image"
          className="modal-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImg;
          }}
        />
        <h2 className="modal-title">{article?.title}</h2>
        <p className="modal-source">{article?.source.name}</p>
        <p className="modal-date">
          {new Date(article?.publishedAt).toLocaleString("ru-Ru", {
            month: "long",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="modal-content-text">{article?.description}</p>
        <a
          href={article?.url}
          className="read-more-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
