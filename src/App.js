import React from "react";

import ToDoItem from "./components/ToDoItem";

const App = () => {
  const date = new Date();
  const hours = date.getHours();
  let styles = {};
  if (hours > 6 && hours < 18) {
    styles.color = "black";
  } else {
    styles.color = "gray";
  }
  return (
    <div className="to-do-list" style={styles}>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  );
};

export default App;
