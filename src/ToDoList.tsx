import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    newTask && setTasks([...tasks, newTask]);
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  function moveTaskUp(index: number) {
    if (index > 0)
    {
      const updatedTask = [...tasks];
      [updatedTask[index],updatedTask[index-1]] = [tasks[index-1],tasks[index]]
      setTasks(updatedTask);
    }
  }

  function moveTaskDown(index: number) {
      if (index < tasks.length - 1)
      {
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = [tasks[index+1],tasks[index]]
            setTasks(updatedTask);
      }
  }

  return (
    <>
      <div className="d-flex flex-column">
        <div className="container p-4 border border-dark rounded bg-light shadow justify-content-center d-flex">
          <input
            type="text"
            className="m-2"
            placeholder="Enter a task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button className="btn btn-lg btn-primary" onClick={addTask}>
            {"Add"}
          </button>
        </div>
        <ol className="m-5 text-white">
          {tasks.map((task, index) => (
            <li
              className="border p-4 m-2 border-dark rounded shadow bg-light"
              key={index}
            >
              <span className="bg-dark text-white p-2 m-2 rounded">{task}</span>
              <button
                className="btn btn-outline-danger p-2 m-1"
                onClick={() => deleteTask(index)}
              >
                {"Delete"}
              </button>
              <button
                className="btn btn-outline-primary p-2 m-1"
                onClick={() => moveTaskUp(index)}
              >
                {"UP"}
              </button>
              <button
                className="btn btn-outline-primary p-2 m-1"
                onClick={() => moveTaskDown(index)}
              >
                {"DOWN"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
