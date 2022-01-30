import { observer } from "mobx-react";
import React from "react";
import postcar from "../../store/postcar";

const PostWhole = observer(() => {
  return (
    <div>
      <button onClick={() => postcar.openPost()}>Back</button>
      <h1>{postcar.infocar.name}</h1>
      <img
        src={postcar.infocar.img}
        alt={postcar.infocar.name}
        className="ImagePassat"
      />
      <label>{postcar.infocar.price}$</label>
      <button onClick={() => postcar.buyCar()}>Buy</button>
    </div>
  );
});

export default PostWhole;
