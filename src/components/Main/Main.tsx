import { useState } from "react";
import AddNew from "./AddNew";
import List from "./List/List";

function Main() {
  let [elements, setElements] = useState<string[]>([]);

  // Function to add a new task
  // This function updates the state by adding a new task to the list of elements
  const addingNewTask = () => {
    setElements([...elements, "New Task"]);
  };

  // Function to handle the deletion of a task
  // This function takes the index of the task to be deleted, the index is passed from the List component, so it knows which task to delete
  const handleDeleteTask = (index: number) => {
    setElements(elements.filter((_, i) => i !== index));
    console.log("Task with index " + index + " deleted");
    console.log("Updated List:", elements);
  };

  return (
    <div className="Main p-3 bg-light border border-black m-2 rounded">
      <AddNew
        onClickAdd={() => {
          addingNewTask();
          console.log("New Task added");
        }}
      />
      <List List={elements} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

export default Main;
