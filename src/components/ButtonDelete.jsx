import React, { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";


function ButtonDelete({ newsItem, ifNewsDeleted }) {
  const [deleteNews, setDeleteNews] = useState(false);

  useEffect(() => {
    if (deleteNews) {
      const followingArr = JSON.parse(localStorage.getItem("followingArr"));
      const newFollowingArr = followingArr.filter((item) => {
        return item.title !== newsItem.title;
      });
      const followingStr = JSON.stringify(newFollowingArr);
      localStorage.setItem("followingArr", followingStr);
      ifNewsDeleted();
    }
  }, [deleteNews]);

  return (
    <div className="buttons-more-item">
   
        <BsIcons.BsTrash
          title="Aus gespeicherten Meldungen entfernen"
          onClick={() => setDeleteNews(true)}
        />
     
    </div>
  );
}

export default ButtonDelete;
