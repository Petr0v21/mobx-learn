import React from "react";
import { observer } from "mobx-react";

import Counter from "./components/Counter";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div>
      <Counter />
      <Todo />
    </div>
  );
};

export default App;
