import TodoItem from "./todoitem";

function TodoList() {
  return (
    <ul className="list-group">
      <TodoItem name="task1" isCompleted={true} />
      <TodoItem name="task1" isCompleted={false} />
      <TodoItem name="task1" isCompleted={false} />
      <TodoItem name="task1" isCompleted={true} />
    </ul>
  );
}

export default TodoList;
