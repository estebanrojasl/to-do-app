import React from "react";

const App = () => {
  return (
    <div>
      <h1>My to-do List</h1>
      <input type="checkbox" name="task1" id="" />
      <label htmlFor="task1">Code</label>
      <br />
      <input type="checkbox" name="task2" id="" />
      <label htmlFor="task2">Eat</label>
      <br />
      <input type="checkbox" name="task3" id="" />
      <label htmlFor="task3">Sleep</label>
      <br />
      <input type="checkbox" name="task4" id="" />
      <label htmlFor="task4">Repeat</label>
    </div>
  );
};

export default App;
