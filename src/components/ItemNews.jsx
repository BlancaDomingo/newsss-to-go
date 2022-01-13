import React from "react";
import "./ItemNews.css";

function ItemNews({ newsItem }) {
  return (
    <div className="news-item">
      <div className="">
        <a href={newsItem.url} target="_blank" rel="noreferrer" className="news-item-a">
          <h3>{newsItem.title}</h3>
        </a>
        <p className="news-item-p">
          {newsItem.publishedAt}&nbsp;&middot;&nbsp;{newsItem.author}
        </p>
        <h4>{newsItem.description}</h4>
      </div>

      <img src={newsItem.urlToImage} alt="..." className="news-item-photo" />
    </div>
  );
}

export default ItemNews;
