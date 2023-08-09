import React from "react";

export const Todos_item = ({ todos , Ondelete}) => {
  return (
    <div className="todo_item">
      <h4>{todos.title}</h4>
      <p>{todos.disc}</p>
      <button className="btn btn-sm btn-danger" onClick={()=>{Ondelete(todos)}}>Delete</button>
      <hr/>
    </div>
  );
};
