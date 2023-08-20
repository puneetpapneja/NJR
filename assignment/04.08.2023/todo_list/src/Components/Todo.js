import React from "react";
import { Todos_item } from "./Todo_item";

export const Todo = (props) => {
  return (
    <div className="container">
      <h3 className="text-center">My list</h3>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todos) => {
            return (
              <Todos_item
                todos={todos}
                key={todos.sno}
                Ondelete={props.Ondelete}
              />
            );
          })}
    </div>
  );
};
