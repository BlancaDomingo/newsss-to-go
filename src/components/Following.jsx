import React from "react";
import "./MainNews.css";
import ItemNews from "./ItemNews";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Following({ getSearchText }) {

  const [news, setNews] = useState([]);

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

  useEffect(() => {
    setNews(JSON.parse(localStorage.getItem("followingArr")));
  }, []);

  return (
    <div className="main-news">
      <div>
        <div className="title">
          <h2>Ich folge</h2>
        </div>

        {news &&
          news.map((newsItem, index) => {
            return (
              <div key={index}>
                <ItemNews newsItem={newsItem} showFollowing={true} />
              </div>
            );
          })}
        {!news && (
          <p className="empty-following">
            Sie haben zurzeit keine Nachrichten für später gespeichert
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

export default Following;
