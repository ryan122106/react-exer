import TodoItem from "./todoitem";

function TodoList({todos}) {
  return (
    <ul className="list-group">
       {todos.map((data) => {
          const {id, name, isComplete } = data;
          return <TodoItem key={id} name={name} isComplete={isComplete} />;
        })}
    </ul>
  );
}

export default TodoList;
