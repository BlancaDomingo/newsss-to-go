import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";
import logo from "../megafon.png";

export default function NavBar({ getSearchText }) {
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const showSidebar = () => setSidebar(!sidebar);

  const onClickButton = () => {
    getSearchText(searchInput);

    setSearchInput("");
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} title="Hauptmenü" />
          </Link>
          <img src={logo} alt="logo megafon" className="logo" />
          <Link to="/" className="app-name-link">
            <h1 className="app-name" title="News">
              Newsss toGo
            </h1>
          </Link>
        </div>
        <div className="navbar-right">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            type="text"
            className="search-input"
            placeholder="Themen, Orte und Quellen suchen..."
          />
          <Link to="/suche" className="search-logo" title="Suche">
            <AiIcons.AiOutlineSearch onClick={onClickButton} />
          </Link>
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
            <img src={logo} alt="logo megafon" className="logo" />
            <p className="app-name">Newsss toGo</p>
          </li>
          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
