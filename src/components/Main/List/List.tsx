import { useState } from "react";

interface ListProps {
  List: string[];
}

function List({ List }: ListProps) {
  return (
    <>
      <ul className="list-group m-3">
        {List.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
