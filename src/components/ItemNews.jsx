import React from "react";
import "./ItemNews.css";
import ItemNewsButtons from "./ItemNewsButtons";

function ItemNews({ newsItem, showFollowing }) {


  return (
    <div className="news-item">
      <div className="">
        <a
          href={newsItem.url}
          target="_blank"
          rel="noreferrer"
          className="news-item-a"
        >
          <h3>{newsItem.title}</h3>
        </a>
        <p className="news-item-p">
          {newsItem.publishedAt}&nbsp;&middot;&nbsp;{newsItem.author}
        </p>
        <h4>{newsItem.description}</h4>
      </div>
      <div>
        <img src={newsItem.urlToImage} alt="..." className="news-item-photo" />
        <ItemNewsButtons newsItem={newsItem} showFollowing={showFollowing}/>
      </div>
    </div>
  );
}

export default ItemNews;
