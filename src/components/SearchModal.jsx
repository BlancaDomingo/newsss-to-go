import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import './SearchModal.css';

function SearchModal({ setOpenModal, getSearchText }) {
  const [searchInput, setSearchInput] = useState("");

  const onClickButton = () => {
    getSearchText(searchInput);
    setSearchInput("");
    setOpenModal(false);
  };

  return (
    <div className="search-modal-background">
      <div className="search-modal-container">
        <input
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          type="text"
          className="search-input"
          placeholder="Themen, Orte und Quellen suchen..."
        />
        <Link to="/suche" className="search-modal-logo" title="Suche">
          <AiIcons.AiOutlineSearch onClick={onClickButton} />
        </Link>
        <div className="search-modal-close-button">
          <AiIcons.AiOutlineClose onClick={() => setOpenModal(false)} />
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
