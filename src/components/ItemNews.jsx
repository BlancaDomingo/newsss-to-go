import React from "react";
import "./ItemNews.css";
import ItemNewsButtons from "./ItemNewsButtons";

function ItemNews({ newsItem, showFollowing }) {

  const getTime = () => {
   
    const date = newsItem.publishedAt.substring(8, 10)  + '-' + newsItem.publishedAt.substring(5, 7) + '-' + newsItem.publishedAt.substring(0, 4) + ' ' + newsItem.publishedAt.substring(11, 16);
   
    return date
  }


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
          {getTime()}&nbsp;&nbsp;&middot;&nbsp;&nbsp;{newsItem.author}
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
