import React from "react";

import ToDosData from "./ToDosData";
import ToDoItem from "./components/ToDoItem";

const App = () => {
  const toDos = ToDosData.map((item) => <ToDoItem key={item.id} item={item} />);
  return <div className="to-do-list">{toDos}</div>;
};

export default App;
