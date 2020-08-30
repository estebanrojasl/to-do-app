import React from "react";

const ToDoItem = (props) => {
  const styles = {};
  if (props.item.completed) {
    styles.color = "gray";
    styles.textDecoration = "line-through";
  }
  return (
    <div className="to-do-item">
      <input
        type="checkbox"
        onChange={() => props.handleChange(props.item.id)}
        checked={props.item.completed}
      />
      <label style={styles}>{props.item.text}</label>
      <br />
    </div>
  );
};

export default ToDoItem;
