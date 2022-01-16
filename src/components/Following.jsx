import React from "react";
import "./MainNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";

function Following() {
    const [news, setNews] = useState([]); 
  useEffect(() => {     
    setNews(JSON.parse(localStorage.getItem("followingArr"))) ; 
  }, [])

  return (
    <div className="main-news">
      <h2>Ich folge</h2>
     
      { news &&
        news.map((newsItem, index) => {
          return (
            <div key={index}>
              <ItemNews newsItem={newsItem} showFollowing={true}/>
            </div>
          );
        })}
        {!news && <p>Sie haben zur Zeit nichts für später gespeichert</p> }
      
    </div>
  );
}

export default Following;
