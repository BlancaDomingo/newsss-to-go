import React from "react";
import "./MainNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";

function MainNews({ apiParam, searchText }) {
  const [news, setNews] = useState("");
  let newsApi =
    "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
  let title = "Deutschland";
  let icon = <FaIcons.FaFlag />

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

    case "science":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Wissenschaft";
      break;

    case "technology":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Technik";
      break;

    case "entertainment":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Unterhaltung";
      break;

    case "sports":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Sport";
      break;

    case "health":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Gesundheit";
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
      <div>
        <div className="title">
        <h2>{news && title}</h2> {/* <h3>{news && icon}</h3> */}

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
                <ItemNews newsItem={newsItem} />
              </div>
            );
          })}
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

export default MainNews;
