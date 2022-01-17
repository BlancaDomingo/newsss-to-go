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
      <div>
        <div className="title">
        <h2>Ich folge</h2>

         {/*  <iframe
            className="weather"
            src="https://www.wetter.de/widget/mini/u1hcy/L2RldXRzY2hsYW5kL3dldHRlci1rb2Vsbi0xODIyMDY3OS5odG1s/"
            title="Wetter"
          >
           
          </iframe> */}
        </div>

        {news &&
          news.map((newsItem, index) => {
            return (
              <div key={index}>
                <ItemNews newsItem={newsItem} showFollowing={true}/>
              </div>
            );
          })}
           {!news && <p className="empty-following">Sie haben zurzeit keine Nachrichten für später gespeichert</p> }
      </div>
      <div className="main-news-right">
      
      <iframe  className="weather-big" src="https://www.wetter.de/widget/heute/u1hugc/false/" title="Wetter"></iframe>

      <div className="in-den-nachrichten">
        <h3>In den Nachrichten</h3>
        <hr />
        <button>Corona</button>
        <button>Handball</button>
        <button>Boris Johnson</button>
        <button>Gottschalk</button>
        <button>Netflix</button>
        <button>DAX</button>

      </div>

      </div>
    </div>
  );
  
  
}

export default Following;
