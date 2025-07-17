function TodoItem({
  id,
  name,
  isCompleted,
  onDelete,
  todos,
  setTodos,
}) {
  const handleRemove = () => {
    const confirmRemove = confirm(
      "Are you sure you want to remove this student?"
    );
    // if confirmRemove is true, remove the student
    if (confirmRemove) {
      // passing up the student id that we want to remove
      onDelete(id);
    }
  };

  const handleToggle = () => {
    const updatedList = todos.map((item) => {
      if (item.id === id) {
        return { ...item, isCompleted: !item.isCompleted };
      }
      return item;
    });
    setTodos(updatedList);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isCompleted === true ? (
        <div>
          <button className="btn btn-sm btn-success" onClick={handleToggle}>
            <i className="bi bi-check-square"></i>
          </button>
          <span className="ms-2 text-decoration-line-through">{name}</span>
        </div>
      ) : (
        <div>
          <button className="btn btn-sm btn-light" onClick={handleToggle}>
            <i className="bi bi-square"></i>
          </button>
          <span className="ms-2">{name}</span>
        </div>
      )}
      <div>
        <button className="btn btn-sm btn-danger" onClick={handleRemove}>
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
