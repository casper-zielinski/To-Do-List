import { useEffect, useState } from "react";
import Trash from "./Trash";

interface ListProps {
  List: string[];
  children?: React.ReactNode;
}

function List({ List, children }: ListProps) {
  const [task, setTasks] = useState<string[]>(List);

  useEffect(() => {
    console.log("AddNew component mounted");
    setTasks(List);
  }, [children]);

  return (
    <>
      <ul className="list-group m-3">
        {task.map((item, index) => (
          <li
            key={index}
            className="list-group-item row m-1 p-2 border border-secondary rounded d-flex align-items-center"
          >
            <input
              type="text"
              className="form-control col-4"
              placeholder={item}
            />
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckbox"
            />
            <Trash
              counter={index}
              onClickDelete={() => {
                console.log("Task with index " + index + " deleted");
                setTasks(task.filter((_, i) => i !== index));
                List = task; // Update the List prop
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
