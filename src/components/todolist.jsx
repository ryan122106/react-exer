import TodoItem from "./todoitem";

function TodoList({ todos, onDelete, setTodos }) {
  return (
    <ul className="list-group">
      {todos.map((data) => {
        const { id, name, isCompleted } = data;
        return (
          <TodoItem
            id={id}
            key={id}
            name={name}
            isCompleted={isCompleted}
            setTodos={setTodos}
            onDelete={(id) => {
              onDelete(id);
            }}
            todos={todos}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
