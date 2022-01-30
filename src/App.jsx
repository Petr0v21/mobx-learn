import React from "react";
import PostCar from "./components/PosrCar/PostCar";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import postcar from "./store/postcar";
import { observer } from "mobx-react";
import PostWhole from "./components/PosrCar/PostWhole";

const App = observer(() => {
  if (postcar.infocar.open) {
    return <PostWhole />;
  } else {
    return (
      <div>
        <Counter />
        <Todo />
        <PostCar />
      </div>
    );
  }
});

export default App;
