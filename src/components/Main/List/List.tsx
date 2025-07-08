import { useEffect, useState } from "react";
import Trash from "./Trash";

interface ListProps {
  List: string[];
  onDeleteTask: (index: number) => void;
}

function List({ List, onDeleteTask }: ListProps) {

  useEffect(() => {
    console.log("List component mounted or updated");
    console.log("Current List:", List);
  }, [List]);

  return (
    <>
      <ul className="list-group m-3">
        {List.map((item, index) => (
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
              onClickDelete={() => onDeleteTask(index)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;