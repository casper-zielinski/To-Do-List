import { useState } from "react";
import AddNew from "./AddNew";
import List from "./List/List";

function Main() {
  let [elements, setElements] = useState<string[]>([]);
  const [taskCounter, setTaskCounter] = useState(0);

  // Function to add a new task
  // This function updates the state by adding a new task to the list of elements
  const addingNewTask = () => {
    setElements([...elements, `Task ${taskCounter + 1}`]);
    setTaskCounter(taskCounter + 1);
  };

  // Function to handle the deletion of a task
  // This function takes the index of the task to be deleted, the index is passed from the List component, so it knows which task to delete
  const handleDeleteTask = (index: number) => {
    console.log("=== MAIN DELETE DEBUG ===");
    console.log("Received index to delete:", index);
    console.log("Current elements before delete:", elements);
    console.log("Element at index", index, ":", elements[index]);

    const newElements = elements.filter((_, i) => i !== index);
    console.log("New elements after filter:", newElements);

    setElements(newElements);
  };

  return (
    <div className="Main p-3 bg-light border border-black m-2 rounded">
      <AddNew
        onClickAdd={() => {
          addingNewTask();
          console.log("New Task added");
        }}
      />
      <List
        List={elements}
        onDeleteTask={handleDeleteTask}
        onAddTask={addingNewTask}
        addedTask={
          <AddNew
            onClickAdd={() => {
              addingNewTask();
              console.log("New Task added");
            }}
          />
        }
      />
    </div>
  );
}

export default Main;
