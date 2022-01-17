import React from "react";
import "./MainNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";

function MainNews({ apiParam, searchText }) {
  const [news, setNews] = useState("");
  let newsApi =
    "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
  let title = "Deutschland";

  switch (apiParam) {
    case "de":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Deutschland";
      break;

    case "general":
      newsApi =
        "https://newsapi.org/v2/top-headlines?category=general&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Welt";
      break;

    case "p":
      newsApi = `https://newsapi.org/v2/top-headlines?country=de&q=${searchText}&language=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788`;
      title = searchText;
      break;

    case "business":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Wirtschaft";
      break;

    default:
      break;
  }
  /*   }, []); */

  useEffect(() => {
    fetch(newsApi)
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
      })
      .catch(() => {
        alert("Error!!!");
      });
  }, [newsApi]);

  return (
    <div className="main-news">
      <div className="title">
        <h2>{news && title}</h2>
        
        <iframe className="weather" src="https://www.wetter.de/widget/mini/u1hcy/L2RldXRzY2hsYW5kL3dldHRlci1rb2Vsbi0xODIyMDY3OS5odG1s/" title="Wetter"> </iframe>
        
      </div>
      
      {news &&
        news.map((newsItem, index) => {
          return (
            <div key={index}>
              <ItemNews newsItem={newsItem} />
            </div>
          );
        })}
      
    </div>
  );
}

export default MainNews;
