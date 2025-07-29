interface AdderProps {
      newTask: string | undefined ;
      handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void;
      addTask(): void;
}

function Adder({ newTask, handleInputChange, addTask }: AdderProps) {
  return (
    <>
      <div className="p-4 justify-content-center d-flex">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add New Task
        </button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Adding New Task
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body d-flex justify-content-center">
                <input
                  type="text"
                  className="m-4 w-100"
                  placeholder="Enter a task"
                  value={newTask}
                  onChange={handleInputChange}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={addTask}
                  data-bs-dismiss="modal"
                  onKeyUp={(event) => event.key === "Enter" && addTask()}
                >
                  Add Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adder;
