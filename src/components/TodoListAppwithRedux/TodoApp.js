import React from "react";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import TodoListApp from "./TodoListApp";

const TodoApp = () => {
  return (
    <div>
      <Provider store={store}>
        <TodoListApp />
      </Provider>
    </div>
  );
};

export default TodoApp;
