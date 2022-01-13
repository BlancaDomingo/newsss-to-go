import React from "react";
import './MainNews.css';
import ItemNews from "./ItemNews";

function MainNews({news, theme}) {
  console.log(news);
  return (
    <div className="main-news">
      <h2>{theme}</h2>
      {news && news.map((newsItem, index) => {
        return (
          
          <div key={index}>
            <ItemNews newsItem={newsItem} />
            
          </div>

        )

      })} 
    </div>
  );
}

export default MainNews;
