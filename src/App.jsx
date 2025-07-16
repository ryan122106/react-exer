
import { useState } from "react";
import AddTodoForm from "./components/addtodoform";
import TodoList from "./components/todolist";


function App() {
      const [todos, setTodos] = useState( [
      {
        id: 1,
        name: "Task 1",
        isCompleted: true
      },
      {
        id: 2,
        name: "Task 2",
        isCompleted: false
      },
      {
        id: 3,
        name: "Task 3",
        isCompleted: false
      }
    ]);
  return (
     <div
      className="card rounded shadow-sm"
      style={{maxWidth: "500px" , margin: "60px auto"}}
    >
      <div className="card-body">
        <h3 className="card-title mb-3">My Todo List</h3>
        <TodoList todos={todos}/>
        <AddTodoForm onAddNew ={(newValue) => setTodos([
          ...todos,
          {
            id: Math.random(),
            name: newValue,
          },
        ])}/>
    </div>

    </div>
  )
}

export default App;