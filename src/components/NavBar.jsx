import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import "./NavBar.css";
import logo from "../megafon.png";
import SearchModal from "./SearchModal";

export default function NavBar({ getSearchText }) {
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [openModal, setOpenModal] = useState(false);

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
            <AiIcons.AiOutlineMenu onClick={showSidebar} title="Hauptmenü" />
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

        <div className="navbar-right-little">
          <AiIcons.AiOutlineSearch
            onClick={() => setOpenModal(true)}
            className="search-logo"
            title="Suche"
          />
          {openModal && (
            <SearchModal
              setOpenModal={setOpenModal}
              getSearchText={getSearchText}
            />
          )}
        </div>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle margin-style">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
            <img src={logo} alt="logo megafon" className="logo" />
            <p className="app-name">Newsss toGo</p>
          </li>

          <li className="nav-text">
            <Link to="./folgeich">
              <span className="nav-icon">
                &nbsp;&nbsp;
                <FaIcons.FaRegStar />
              </span>
              <span className="nav-title">Folge ich</span>
            </Link>
          </li>

          <li>
            <hr className="hr-style" />
          </li>

          <li className="nav-text">
            <Link to="./covid">
              <span className="nav-icon">
                &nbsp;&nbsp;
                <MdIcons.MdOutlineHealthAndSafety />
              </span>
              <span className="nav-title">COVID-19</span>
            </Link>
          </li>

          <li>
            <hr className="hr-style" />
          </li>

          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span className="nav-icon">&nbsp;&nbsp;{item.icon}</span>
                  <span className="nav-title">{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li>
            <hr className="hr-style" />
          </li>
          <li className="nav-text">
            <Link to="./hilfe">
              <span className="nav-icon">
                &nbsp;&nbsp;
                <IoIcons.IoMdHelpCircle />
              </span>
              <span className="nav-title">Hilfe</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
