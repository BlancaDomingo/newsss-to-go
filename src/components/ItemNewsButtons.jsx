import React from "react";
import "./ItemNewsButtons.css";

import * as MdIcons from "react-icons/md";
import ButtonFollowing from "./ButtonFollowing";
import ButtonShare from "./ButtonShare";

function ItemNewsButtons({ newsItem, showFollowing }) {
 

  return (
    <div className="buttons-more">
      <ButtonFollowing newsItem={newsItem} showFollowing={showFollowing}/>
     
      &nbsp;&middot;&nbsp;

      <ButtonShare newsItem={newsItem} />
     
      &nbsp;&middot;&nbsp;
      <div className="buttons-more-item">
        <MdIcons.MdMoreVert title="Mehr" />
      </div>
    </div>
  );
}

export default ItemNewsButtons;
