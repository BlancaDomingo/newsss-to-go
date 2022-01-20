import React from "react";
import "./MainNews.css";
import * as BiIcons from "react-icons/bi";

import logoGerman from "../alemania.jpg"
import logoOb from "../oberhausen.jpg";
import logoWorld from "../mundo.jpg";
import logoSearch from "../search.png"
import logoBusiness from "../business.jpg"
import logoScience from "../ciencia.jpg"
import logoTech from "../tech.jpg"
import logoEnter from "../enter.jpg"
import logoSport from "../sport.jpg"
import logoGesund from "../gesund.jpeg"

import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchData } from "./SearchData";
import { Circles } from "react-loader-spinner";

function MainNews({ apiParam, searchText, getSearchText }) {
  const [news, setNews] = useState("");
  const [done, setDone] = useState(false);
  

  let newsApi =
    /* "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
    `https://newsserver123.herokuapp.com/news/de`
  let title = "Deutschland";
  let icon = logoGerman;

  switch (apiParam) {
    case "de":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/de`
      title = "Deutschland";
      icon = logoGerman;
      break;

    case "general":
      newsApi =
        /* "https://newsapi.org/v2/top-headlines?category=general&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
        `https://newsserver123.herokuapp.com/news/general`
      title = "Welt";
      icon = logoWorld;
      break;

    case "p":
      let searchTextNotEmpty = `''`;
      if (searchText !== "") {
        searchTextNotEmpty = searchText;
      }
      newsApi = /* `https://newsapi.org/v2/everything?q=${searchTextNotEmpty}&language=de&apiKey=1ac2aebda1c64e04a5bd4828db18f788`; */
      `https://newsserver123.herokuapp.com/news/search/${searchTextNotEmpty}`
      title = searchText;
      icon = logoSearch;
      break;

    case "business":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/business`
      title = "Wirtschaft";
      icon = logoBusiness;
      break;

    case "science":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/science`
      title = "Wissenschaft";
      icon = logoScience;
      break;

    case "technology":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/technology`
      title = "Technik";
      icon = logoTech;
      break;

    case "entertainment":
      newsApi =
        /* "https://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
        `https://newsserver123.herokuapp.com/news/entertainment`
      title = "Unterhaltung";
      icon = logoEnter;
      break;

    case "sports":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&category=sports&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/sports`
      title = "Sport";
      icon = logoSport;
      break;

    case "health":
      newsApi =
       /*  "https://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=1ac2aebda1c64e04a5bd4828db18f788"; */
       `https://newsserver123.herokuapp.com/news/health`
      title = "Gesundheit";
      icon = logoGesund;
      break;

    default:
      break;
  }

  useEffect(() => {
    fetch(newsApi)
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
        setDone(true);
      })
      .catch(() => {
        alert("Error!!!");
      });
  }, [newsApi]);

  if (!done) {
    return (
      <div className="loader">
        <Circles
          height="150"
          width="150"
          color="#00da9d"
          arialLabel="loading..."
        />
      </div>
    );
  } else {
    return (
      <div className="main-news">
        <div className="main-news-left">
          <div className="title">
            <div className="flex-title">
              <img src={icon} alt={title} className="icon-title" />
              <h2 className="title-title">{news && title}</h2>
            </div>
            <div className="share-main-news">
              <BiIcons.BiShareAlt title="Teilen" className="icon-style" />
              <p>Teilen</p>
            </div>
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
            <p className="empty-following">
              &nbsp;&nbsp;&nbsp; Keine Ergebnisse gefunden&nbsp;&nbsp;&nbsp;
            </p>
          )}
        </div>
        {news && news.length !== 0 && (
          <div className="main-news-right">
            <iframe
              className="weather-big"
              src="https://www.wetter.de/widget/heute/u1hugc/false/"
              title="Wetter"
            ></iframe>

            <div className="in-den-nachrichten">
              <h3>In den Nachrichten</h3>
              <hr />
              {SearchData.map((item, index) => {
                return (
                  <Link key={index} to="/suche" title="Suche">
                    <button onClick={() => getSearchText(item)}>{item}</button>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default MainNews;
