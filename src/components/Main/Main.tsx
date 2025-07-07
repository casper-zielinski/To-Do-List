import { useState } from "react";
import AddNew from "./AddNew";
import List from "./List/List";

function Main() {
  let [elements, setElements] = useState<string[]>([]);

  const addingNewTask = () => {
    setElements([...elements, "New Task"]);
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
        children={
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
