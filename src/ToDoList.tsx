import { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function handleInputChangeTask(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const updatedText = [...tasks];
    updatedText[index] = event.target.value;
    setTasks(updatedText);
  }

  function addTask() {
    newTask && setTasks((prev) => [...prev, newTask]);
    setIsChecked((prev) => [...prev, false]);
  }

  function deleteTask(index: number) {
    if (isChecked[index]) {
      setTasks(tasks.filter((_, i) => i !== index));
      setIsChecked(isChecked.filter((_, i) => i !== index));
    }
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index - 1]] = [
        tasks[index - 1],
        tasks[index],
      ];
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      const updatedTask = [...tasks];
      [updatedTask[index], updatedTask[index + 1]] = [
        tasks[index + 1],
        tasks[index],
      ];
      setTasks(updatedTask);
    }
  }

  function changeCheckValue(index: number) {
    setIsChecked((prev) =>
      prev.map((value, i) => (i === index ? !value : value))
    );
  }

  return (
    <>
      <div className="d-flex flex-column align-items-center justify-content-center">
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
        <div className="container-fluid">
          <ol className="text-white list-group list-group-numbered">
            {tasks.map((task, index) => (
              <li
                className="border p-4 my-2 border-dark rounded shadow bg-light row mx-1"
                key={index + task }
              >
                <input
                  type="text"
                  value={tasks[index]}
                  onChange={(event) => handleInputChangeTask(event, index)}
                  className={
                    isChecked[index]
                      ? "text-decoration-line-through text-secondary"
                      : "text-dark"
                  }
                />
                <button
                  className="btn btn-outline-danger btn-lg p-2 my-2"
                  onClick={() => deleteTask(index)}
                >
                  {"Delete"}
                </button>
                <button
                  className="btn btn-outline-primary p-2 my-1"
                  onClick={() => moveTaskUp(index)}
                >
                  {"UP"}
                </button>
                <button
                  className="btn btn-outline-primary p-2 my-1"
                  onClick={() => moveTaskDown(index)}
                >
                  {"DOWN"}
                </button>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="checkDefault"
                  onChange={() => changeCheckValue(index)}
                ></input>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
