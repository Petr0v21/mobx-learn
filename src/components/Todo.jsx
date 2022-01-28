import { observer } from "mobx-react";
import todo from "../store/todo";

const Todo = observer(() => {
  return (
    <div>
      {todo.todos.map((t) => (
        <div key={t.id}>
          <input
            type="checkbox"
            checked={t.complete}
            onChange={() => todo.completeTodo(t)}
          />
          {t.title}
          <button onClick={() => todo.removeTodo(t.id)}>X</button>
        </div>
      ))}
    </div>
  );
});

export default Todo;
