import { ReactNode, useEffect, useState } from "react";
import Trash from "./Trash";
import { ListItem } from "../Main";

interface ListProps {
  List: ListItem[];
  deleteTask: (index: number) => void;
  changer: ReactNode;
}

function List({ List, deleteTask, changer }: ListProps) {

  const [isCheckedTask, setIsCheckedTask] = useState<boolean[]>([]);

  useEffect(() => {
    setIsCheckedTask((prev) => {
      let newPrev = prev;
      newPrev.push(false);
      return newPrev;
    });
    console.log(isCheckedTask);
  }, [changer]);

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
              className={
                isCheckedTask[index]
                  ? "form-control col-4 text-decoration-line-through fw-bolder text-muted"
                  : "form-control col-4 fw-bolder"
              }
              placeholder={`Task ${index + 1}`}
              onChange={(e) => {
                {
                  console.log(
                    `Input changed for item ${index}:`,
                    e.target.value
                  );
                }
              }}
            />
            <input
              className={
                isCheckedTask[index]
                  ? "form-check-input col-1 bg-success p-3 mt-2"
                  : "form-check-input col-1 bg-dark p-3 mt-2"
              }
              type="checkbox"
              value=""
              checked={isCheckedTask[index]}
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
                if (isCheckedTask[index]) {
                  console.log("About to call onDeleteTask with index:", index);
                  deleteTask(index);
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
