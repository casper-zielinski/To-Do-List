import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

// Fragments are used to return more than one Element, like here h1 and ul

function ListGroup() {
  let items = [
    //for List Elements, normal Array
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Philadelphia",
  ];


  //event handler
  const handle = (event : MouseEvent) => {
     console.log("Hello")
    };

  return (
    <Fragment>
      <h1>List</h1>
      {items.length == 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index} onClick={handle}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  ); // do not forget Parantheses when returning smth with multiple lines
  // Mapping through the array and converting it to a list item, this expression must be wrapped with {}
}

export default ListGroup;
