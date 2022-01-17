import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import Modal from "./Modal";

function ButtonShare({ newsItem }) {
    const [openModal, setOpenModal] = useState(false);

 

  return (
    <div className="buttons-more-item" >
      <BiIcons.BiShareAlt title="Teilen" onClick={() => setOpenModal(true)} />
      { openModal && <Modal newsItem={newsItem} setOpenModal={setOpenModal}/>}
    </div>
  );
}

export default ButtonShare;
