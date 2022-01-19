import React from "react";
import "./ItemNewsButtons.css";


import * as MdIcons from "react-icons/md";
import ButtonFollowing from "./ButtonFollowing";
import ButtonShare from "./ButtonShare";
import ButtonDelete from "./ButtonDelete";

function ItemNewsButtons({ newsItem, showFollowing, ifNewsDeleted }) {
 

  return (
    <div className="buttons-more">
      <ButtonFollowing newsItem={newsItem} showFollowing={showFollowing}/>
     
      &nbsp;&middot;&nbsp;

      <ButtonShare newsItem={newsItem} />
     
      &nbsp;&middot;&nbsp;
      {showFollowing ? 
        <ButtonDelete newsItem={newsItem} showFollowing={showFollowing} ifNewsDeleted={ifNewsDeleted} />
      :
      <div className="buttons-more-item">
      <MdIcons.MdMoreVert title="Mehr" />
    </div>
      }
    </div>
  );
}

export default ItemNewsButtons;
