import React, { Component } from "react";

import ToDosData from "./ToDosData";
import ToDoItem from "./components/ToDoItem";

class App extends Component {
  constructor() {
    super();
    this.state = { data: ToDosData };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      let updatedItems = prevState.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
      return { data: updatedItems };
    });
  }

  render() {
    const toDos = this.state.data.map((item) => (
      <ToDoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="to-do-list">{toDos}</div>;
  }
}

export default App;
