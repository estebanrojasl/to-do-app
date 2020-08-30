import React from "react";

const ToDoItem = (props) => {
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      <label>{props.item.text}</label>
      <br />
    </div>
  );
};

export default ToDoItem;
