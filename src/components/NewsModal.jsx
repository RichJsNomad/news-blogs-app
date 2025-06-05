import React from "react";
import demoImg from "../assets/images/demo.jpg";
import "../styles/newsModal.css";

const NewsModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="modal-image" className="modal-image" />
        <h2 className="modal-title">
          Главные новости недели о спорте, политике, программировании и прочем
        </h2>
        <p className="modal-source">Source: the Guardian</p>
        <p className="modal-date">Mar 15, 1994, 6:50 PM</p>
        <p className="modal-content-text">
          Главные новости недели о спорте, политике, программировании и прочем
        </p>
        <a href="" className="read-more-link">
          Подробнее
        </a>
      </div>
    </div>
  );
};

export default NewsModal;
