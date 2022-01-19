import React from "react";
import "./LocalNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoOb from "../oberhausen.jpg";
import logoBe from "../berlin.jpg";
import logoKo from "../koeln.jpg"
import { SearchData } from "./SearchData";
import { Circles } from "react-loader-spinner";
import * as BiIcons from "react-icons/bi";

function LocalNews({ getSearchText }) {
  const [news, setNews] = useState("");
  const [city, setCity] = useState("oberhausen");
  const [done, setDone] = useState(false);

  const getWeatherUrl = () => {
    if (city === "oberhausen") {
      return "https://www.wetter.de/widget/heute/u1hugc/false/";
    } else if (city === "köln") {
      return "https://www.wetter.de/widget/heute/u1hcy/false/ ";
    } else if (city === "berlin") {
      return "https://www.wetter.de/widget/heute/u33db8/false/ ";
    }
  };

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${city}&language=de&apiKey=9d557de654564232a8830ba0338536e2`
    )
      .then((res) => res.json())
      .then((res) => {
        setNews(res.articles);
        setDone(true);
      })
      .catch(() => {
        alert("Error!!!");
      });
  }, [city]);

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
      <div className="page">
        <div className="top-buttons">
          <div className="local-city" onClick={() => setCity("oberhausen")}>
            <img
              src={logoOb}
              alt="Oberhausen bei Nacht"
              className="city-picture"
            />
            <p>Oberhausen</p>
          </div>
          <div className="local-city" onClick={() => setCity("köln")}>
            <img
              src={logoKo}
              alt="Köln Panorama"
              className="city-picture"
            />
            <p>Köln</p>
          </div>
          <div className="local-city" onClick={() => setCity("berlin")}>
            <img
              src={logoBe}
              alt="Berlin mit Wolken"
              className="city-picture"
            />
            <p>Berlin</p>
          </div>
          <div className="local-city ">
            <div className="city-picture center">
              <BiIcons.BiAddToQueue className="size"/>
            </div>
            <p>Hinzufügen</p>
          </div>
        </div>
        <div className="local-main-news">
          <div className="main-news-left">
            <div className="title">
              <h2>{news && `Lokalnachrichten`}</h2>
            </div>

            {news &&
              news.map((newsItem, index) => {
                return (
                  <div key={index}>
                    <ItemNews newsItem={newsItem} />
                  </div>
                );
              })}
            {/*  {news.length === 0 && (
          <p className="empty-following">&nbsp;&nbsp;&nbsp;
            Keine Ergebnisse gefunden&nbsp;&nbsp;&nbsp;
          </p>
        )} */}
          </div>
          <div className="main-news-right">
            <iframe
              className="weather-big-local"
              src={getWeatherUrl()}
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
        </div>
      </div>
    );
  }
}

export default LocalNews;
