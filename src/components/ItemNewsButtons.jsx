import React, { useState, useEffect } from "react";
import "./ItemNewsButtons.css";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

function ItemNewsButtons({ newsItem, showFollowing }) {
  
  const [following, setFollowing] = useState(false); 

  const followingSave = () => {
    setFollowing(!following); 
   
  };


  useEffect(() => {
    let followingArr;
    let followingStr;
    if (following) {
      console.log('following');
      if (!localStorage.followingArr) {
        followingArr = [];
      } else {
        followingArr = JSON.parse(localStorage.getItem("followingArr"));
      }
      followingArr.push(newsItem);
      followingStr = JSON.stringify(followingArr);
      localStorage.setItem("followingArr", followingStr);
      
      } else {
        console.log('!following');
        console.log(newsItem.title);
    } 
    
    /*  else {
      if (!localStorage.followingArr) {
        followingArr = [];
      } else {
        followingArr = JSON.parse(localStorage.getItem("followingArr"));
        const newFollowingArr = followingArr.filter((item) => {
          return item !== newsItem;
        });
        followingStr = JSON.stringify(newFollowingArr);
        localStorage.setItem("followingArr", followingStr);
      }
    } */
   }, [following]);

  return (
    <div className="buttons-more">
      <div className="buttons-more-item" onClick={followingSave}>
        {following || showFollowing ? (
          <RiIcons.RiBookmarkFill title="Aus gespeicherten Meldungen entfernen" />
        ) : (
          <RiIcons.RiBookmarkLine title="Für später speichern" />
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
