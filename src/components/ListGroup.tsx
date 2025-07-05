import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
// {items: [...], heading: string, function(string)} is the props passed to the component
interface ListGroupProps {
  items: string[];
  heading: string;
  // function to handle Selected Items, takes Strings and returns nothing
  onSelectedItem: (item: string) => void; // wie onClick
}

// Fragments are used to return more than one Element, like here h1 and ul

function ListGroup({ items, heading, onSelectedItem }: ListGroupProps) {

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1 className="p-4 m-2">{heading}</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group bg-dark p-4 m-5 rounded">
        {items.map((item, index) => (
          <li
            className={
              index === selectedIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectedItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  ); // do not forget Parantheses when returning smth with multiple lines
  // Mapping through the array and converting it to a list item, this expression must be wrapped with {}
}

export default ListGroup;
