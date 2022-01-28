import { observer } from "mobx-react";
import store from "../store/increment";

const Counter = observer(() => {
  return (
    <div>
      <div>Data: {store.data}</div>
      <button onClick={() => store.increment()} />
    </div>
  );
});

export default Counter;
