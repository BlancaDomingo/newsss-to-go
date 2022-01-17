import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import "./Modal.css";

function Modal({ newsItem, setOpenModal }) {
  const [copied, setCopied] = useState(false);

  const copyLink = () => {
    const el = document.createElement("input");
    el.value = newsItem.url;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-close-button">
          <AiIcons.AiOutlineClose onClick={() => setOpenModal(false)} />
        </div>
        <div >
            <h3 className="modal-author">{newsItem.author}</h3>
          <h2 className="modal-title">{newsItem.title}</h2>
        </div>
        <div className="modal-body">
          <hr />
          <p>Teilen über</p>
          <div className="modal-body-buttons">
            <BsIcons.BsFacebook title="Facebook" className="modal-button facebook" />
            <BsIcons.BsLink45Deg
              title="Link kopieren"
              className="modal-button link "
              onClick={copyLink}
            />

            <BsIcons.BsTwitter title="Twitter" className="modal-button twitter" />
          </div>
          <div className="modal-buttons-titles">
            <p className="modal-button-title">Facebook</p>
            <p className="modal-button-title">{!copied ? "Link kopieren" : "Link kopiert !"}</p>
            <p className="modal-button-title">Twitter</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
