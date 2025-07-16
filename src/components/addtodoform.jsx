function AddTodoForm({ onAddNew }) {
  return (
    <div className="mt-4">
      <form className="d-flex justify-content-between align-items-center">
        <input
          type="name"
          className="form-control"
          placeholder="Add new item..."
          required
          id="todosname"
        />
        <button
          className="btn btn-primary btn-sm rounded ms-2"
          onClick={(event) => {
            // disable the default button behaviour
            event.preventDefault();

            // check if the input field is empty or not
            if (todosname.value === "") {
              alert("Please fill in the name");
            } else {
              // long method
              // const updatedList = [...list]; // clone list
              // updatedList.push({
              //   id: Math.random(), // generate random decimal number 0.9399849483993
              //   name: studentname.value,
              // }); // add data in
              // setList(updatedList); // update the list
              // short method
              onAddNew(todosname.value);
              // clear the input
              todosname.value = "";
            }
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTodoForm;
