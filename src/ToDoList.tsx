import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Adder from "./Adder";
import { v4 as uuidv4 } from "uuid";

function ToDoList() {
  type Task = {
    id: string;
    text: string;
  };

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<Task>({ id: "", text: "" });
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask({
      id: uuidv4(),
      text: event.target.value,
    });
  }

  function handleInputChangeTask(
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) {
    const updatedText = [...tasks];
    updatedText[index] = { ...updatedText[index], text: event.target.value };
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
        <Adder
          handleInputChange={handleInputChange}
          addTask={addTask}
          newTask={newTask?.text}
        />
        <div className="container-fluid">
          <ol className="text-white list-group list-group-numbered">
            {tasks.map((task, index) => (
              <li
                className="border p-4 my-2 border-dark rounded shadow bg-light row mx-1"
                key={task.id}
              >
                <input
                  type="text"
                  value={tasks[index].text}
                  onChange={(event) => handleInputChangeTask(event, index)}
                  className={
                    isChecked[index]
                      ? "text-decoration-line-through text-secondary col-sm-7 col-xl-5 me-sm-3 me-xl-1 rounded"
                      : "text-dark col-sm-7 col-xl-5 me-sm-3 me-xl-1 rounded"
                  }
                />
                <button
                  className="btn btn-outline-danger btn-lg p-2 my-2 col-sm-4 col-xl-3"
                  onClick={() => deleteTask(index)}
                >
                  {"Delete"}
                </button>
                <button
                  className="btn btn-outline-primary p-2 my-1 col-sm-5 me-sm-2 my-sm-3 col-xl-1 mx-xl-2"
                  onClick={() => moveTaskUp(index)}
                >
                  {"UP"}
                </button>
                <button
                  className="btn btn-outline-primary p-2 my-1 col-sm-5 ms-sm-2 my-sm-3 col-xl-1 mx-xl-2"
                  onClick={() => moveTaskDown(index)}
                >
                  {"DOWN"}
                </button>
                <input
                  className="form-check-input p-3 ms-2 my-sm-4 border border-black border-2"
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
