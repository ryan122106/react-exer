import TodoItem from "./todoitem";

function TodoList({todos}) {
  return (
    <ul className="list-group">
       {todos.map((data) => {
          const {id, name, isCompleted } = data;
          return <TodoItem key={id} name={name} isCompleted={isCompleted} />;
        })}
    </ul>
  );
}

export default TodoList;
