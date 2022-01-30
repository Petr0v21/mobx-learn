import { observer } from "mobx-react";
import React from "react";
import postcar from "../../store/postcar";

import "./styles.css";

const PostCar = observer(() => {
  return (
    <div className="Post">
      <h1>{postcar.infocar.name}</h1>
      <img
        src={postcar.infocar.img}
        alt={postcar.infocar.name}
        className="ImagePassat"
      />
      <label>{postcar.infocar.price}$</label>
      {postcar.infocar.saled ? (
        <button className="LinkToPostDisable" disabled={true}>
          Перейти до Обявления
        </button>
      ) : (
        <button className="LinkToPost" onClick={() => postcar.openPost()}>
          Перейти до Обявления
        </button>
      )}
    </div>
  );
});

export default PostCar;
