function TodoItem({ name, isCompleted }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {(isCompleted === true) ? (
      <div>
        <button className="btn btn-sm btn-success">
          <i className="bi bi-check-square"></i>
        </button>
        <span className="ms-2 text-decoration-line-through">{name}</span>
      </div>
      ) :(
      <div>
        <button className="btn btn-sm btn-light">
          <i className="bi bi-square"></i>
        </button>
        <span className="ms-2">{name}</span>
      </div>
      )}
      <div>
        <button className="btn btn-sm btn-danger">
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
