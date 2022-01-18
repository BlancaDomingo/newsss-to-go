import React from "react";
import "./MainNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

function MainNews({ apiParam, searchText, getSearchText }) {
  const [news, setNews] = useState("");

  const search = [
    "Corona",
    "Handball",
    "Boris Johnson",
    "DAX",
    "Bayern",
    "Ukraine",
    "Djokovic",
    "Omikron",
    "Horoskop",
  ];

  

  let newsApi =
    "https://newsapi.org/v2/top-headlines?country=de&apiKey=9d557de654564232a8830ba0338536e2";
  let title = "Deutschland";
  

  switch (apiParam) {
    case "de":
      newsApi =
        "https://newsapi.org/v2/top-headlines?country=de&apiKey=9d557de654564232a8830ba0338536e2";
      title = "Deutschland";
      break;

    case "general":
      newsApi =
        "https://newsapi.org/v2/top-headlines?category=general&apiKey=1ac2aebda1c64e04a5bd4828db18f788";
      title = "Welt";
      break;

    case "p":
      let searchTextNotEmpty = `''`;
      if (searchText !== '') {
        searchTextNotEmpty = searchText;
      } 
      newsApi = `https://newsapi.org/v2/everything?q=${searchTextNotEmpty}&language=de&apiKey=9d557de654564232a8830ba0338536e2`;
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
      <div className="main-news-left">
        <div className="title">
          <h2>{news && title}</h2> {/* <h3>{news && icon}</h3> */}
        </div>

        {news &&
          news.map((newsItem, index) => {
            return (
              <div key={index}>
                <ItemNews newsItem={newsItem} />
              </div>
            );
          })}
          {news.length === 0 && (
          <p className="empty-following">&nbsp;&nbsp;&nbsp;
            Keine Ergebnisse gefunden&nbsp;&nbsp;&nbsp;
          </p>
        )}
      </div>
      <div className="main-news-right">
        <iframe
          className="weather-big"
          src="https://www.wetter.de/widget/heute/u1hugc/false/"
          title="Wetter"
        ></iframe>

        <div className="in-den-nachrichten">
          <h3>In den Nachrichten</h3>
          <hr />
          {search.map((item, index) => {
            return (
              <Link key={index} to="/suche" title="Suche">
                <button onClick={() => getSearchText(item)}>
                  {item}
                </button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MainNews;
