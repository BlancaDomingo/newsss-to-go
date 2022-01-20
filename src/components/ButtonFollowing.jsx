import React, { useState, useEffect } from "react";
import "./ItemNewsButtons.css";

import * as BsIcons from "react-icons/bs";
import * as RiIcons from "react-icons/ri";


function ButtonFollowing({ newsItem, showFollowing }) {
  const [following, setFollowing] = useState(null);

  const followingSave = () => {
    if (following === null) {
      setFollowing(true);
    } else if (following === true) {
      setFollowing(false);
    } else if (following === false) {
      setFollowing(true);
    }
  };

  useEffect(() => {
    let followingArr;
    let followingStr;
    if (following) {
      console.log("following");
      if (!localStorage.followingArr) {
        followingArr = [];
      } else {
        followingArr = JSON.parse(localStorage.getItem("followingArr"));
      }
      followingArr.push(newsItem);
      followingStr = JSON.stringify(followingArr);
      localStorage.setItem("followingArr", followingStr);
    } else if (following === false) {
      followingArr = JSON.parse(localStorage.getItem("followingArr"));
      const newFollowingArr = followingArr.filter((item) => {
        return item.title !== newsItem.title;
      });
      followingStr = JSON.stringify(newFollowingArr);
      localStorage.setItem("followingArr", followingStr);
    }

    
  }, [following]);

/*   const setIconFollowing = () => {
    if (showFollowing) {
      return <BsIcons.BsTrash title="Aus gespeicherten Meldungen entfernen" />
    } else if (following) {
      return <RiIcons.RiBookmarkFill title="Aus gespeicherten Meldungen entfernen" />
    } else return <RiIcons.RiBookmarkLine title="Für später speichern" />
  } */

  return (
    <div className="buttons-more-item" onClick={followingSave}>
   {/*    {setIconFollowing()} */}
     {following || showFollowing ? (
        <RiIcons.RiBookmarkFill title="Aus gespeicherten Meldungen entfernen" />
      ) : (
        <RiIcons.RiBookmarkLine title="Für später speichern" />
      )} 
    </div>
  );
}

export default ButtonFollowing;
