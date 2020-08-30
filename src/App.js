import React, { Component } from "react";

import ToDosData from "./ToDosData";
import ToDoItem from "./components/ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = { data: ToDosData };
  }
  render() {
    const toDos = this.state.data.map((item) => (
      <ToDoItem key={item.id} item={item} />
    ));
    return <div className="to-do-list">{toDos}</div>;
  }
}

export default App;
