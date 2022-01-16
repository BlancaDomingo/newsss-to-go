import React, { useState, useEffect } from "react";
import "./ItemNewsButtons.css";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

function ItemNewsButtons({newsItem, showFollowing}) {
  const [following, setFollowing] = useState(false);

  const followingSave = () => {
    setFollowing(!following);
  };

  useEffect(() => {
       if (showFollowing) {
           setFollowing(true) }
  }, [])

  useEffect(() => {
    if (following) {
      let followingArr;
      if (!localStorage.followingArr) {
        followingArr = [];
      } else {
        followingArr = JSON.parse(localStorage.getItem("followingArr"));
      }
      followingArr.push(newsItem);
      const followingString = JSON.stringify(followingArr);
      localStorage.setItem("followingArr", followingString);
    } 
  }, [following]);

  return (
    <div className="buttons-more">
      <div className="buttons-more-item" onClick={followingSave}>
        {!following ? (
          <RiIcons.RiBookmarkLine title="Für später speichern" />
        ) : (
          <RiIcons.RiBookmarkFill title="Aus gespeicherten Meldungen entfernen" />
        )}
      </div>
      &nbsp;&middot;&nbsp;
      <div className="buttons-more-item">
        <BiIcons.BiShareAlt title="Teilen" />
      </div>
      &nbsp;&middot;&nbsp;
      <div className="buttons-more-item">
        <MdIcons.MdMoreVert title="Mehr" />
      </div>
    </div>
  );
}

export default ItemNewsButtons;
