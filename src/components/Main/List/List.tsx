import { ReactNode, useEffect, useState } from "react";
import Trash from "./Trash";

interface ListProps {
  List: string[];
  onDeleteTask: (index: number) => void;
  onAddTask?: () => void; // Optional prop for adding tasks
  addedTask: ReactNode;
}

function List({ List, onDeleteTask, onAddTask, addedTask }: ListProps) {
  let isCheckedArray: boolean[] = [];

  const [isCheckedTask, setIsCheckedTask] = useState<boolean[]>(
    isCheckedArray.map(() => false)
  );

  useEffect(() => {
    console.log("List component mounted or updated");
    console.log("Current List:", List);
    setIsCheckedTask(new Array(List.length).fill(false));
  }, [List]); // ← Change back to [List]

  return (
    <>
      <ul className="list-group m-3">
        {List.map((item, index) => (
          <li
            key={`${item}-${index}`} // Use item content + index as key
            className="list-group-item row m-1 p-2 border border-secondary rounded d-flex align-items-center"
          >
            <input
              type="text"
              className="form-control col-4"
              placeholder={`Task ${index + 1}`}
            />
            <input
              className="form-check-input me-1"
              type="checkbox"
              value=""
              id="firstCheckbox"
              aria-label="Checkbox for following text input"
              onChange={() => {
                console.log(`Checkbox for item ${index} changed`);
                setIsCheckedTask(
                  isCheckedTask.map((checker, checkindex) => {
                    return checkindex === index ? !checker : checker;
                  })
                );
                console.log(
                  "Updated isCheckedTask:",
                  isCheckedTask[index] + " on index " + index
                );
              }}
            />
            <Trash
              onClickDelete={() => {
                console.log("=== DELETE DEBUG ===");
                console.log("Clicked index:", index);
                console.log("isCheckedTask array:", isCheckedTask);
                console.log("isCheckedTask[index]:", isCheckedTask[index]);
                console.log("Current List:", List);
                console.log("List length:", List.length);

                if (isCheckedTask[index]) {
                  console.log("About to call onDeleteTask with index:", index);
                  onDeleteTask(index);
                } else {
                  console.log("Task not checked, deletion skipped");
                }
              }}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
