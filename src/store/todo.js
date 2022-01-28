import { makeAutoObservable } from "mobx";

class Todo {
  todos = [
    { id: 0, title: "first", complete: false },
    { id: 1, title: "second", complete: false },
    { id: 2, title: "third", complete: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  removeTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  completeTodo(todo) {
    this.todos[todo.id].complete = !todo.complete;
    console.log(todo.id);
  }
}

export default new Todo();
