# React

## Creating Component

Plain Typescript: filename.ts
React Components: filename.tsx

```tsx
function Message() {
      //JSX: JavaScript XML
      return <h1>Hello World</h1>;
}
```

Function Based React Components
This Code is going to be compile to JS Code.
Try it under this Website: [Website](https://babeljs.io/repl);

```tsx
export default Message;
```

Exporting Component so others can import it

```tsx
import Message from "./Message";
```

Using it (Example):

```tsx
function App() {
  return <div><Message /></div> // < - /> is self closing, no need for </Message>
}
```

## Importing bootstrap

Installing in CMD :

```cmd
npm i bootstrap@5.2.3
```

importing:

```tsx
import 'bootstrap/dist/css/bootstrap.css'
```

## Using more than one HTML tag in JSX

There are some ways to do it, because normaly you can't do it, but by using Fragments you can.
Wrap your tags in a Fragment like this:

```tsx
import { Fragment } from "react/jsx-runtime";

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

  items = [];

  const message = items.length == 0 ? <p>No item found</p> : null; //Using JS to decide what to render

  return (
    <Fragment>
      <h1>List</h1>
      { message }
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  ); // do not forget Parantheses when returning smth with multiple lines
  // Mapping through the array and converting it to a list item, this expression must be wrapped with {}
}

export default ListGroup;
```

The Fragments are imported like this:

```tsx
import { Fragment } from "react/jsx-runtime";
```

This is the way to use more than one HTML tag in JSX. You can use Fragments to return more than one Element. Fragments are used to return more than one Element, like here it returns a h1 and a ul.

Also a mapping is used to dynamically give the list items their values. The key is used to give each item a unique key, this is a good practice in React. The key is used to identify each item in the list. This is used to prevent React from re-rendering the whole list when an item is added or removed. In JSX you cannot use for lops, so this is the way to do it. The map function is used to convert the array to a list of list items. Calling a variable in JSX works like this:

```tsx
{VariableName}
```

Also using this expression:

```tsx
{items.length == 0 && <p>No item found</p>}
```

only if the left statement is true, the right statement is returned, otherwise false, so nothing gets rendered.

## Using Events

in the onClick() section you can use a function to specify what should happen when the button is clicked. This function is called when the button is clicked. Example:

```tsx
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={index} onClick={(event) => console.log(event)}>
            {item}
          </li>
        ))}
      </ul>

```

or you can specify a function:

```tsx
<li className="list-group-item" key={index} onClick={(event) => handle(event)}>
```

and then in your component you can define the function like this:

```tsx
  const handle = (event : MouseEvent) => {
     console.log(event)
    };

```

you need to specify the event, otherwise you will get an error from TypeScript compiler. This is called Type Annotation in TypeScript. It is used to specify the type of a variable. In this case the type of the event is MouseEvent. You can also use the type of the event to specify the type of the function parameters.

Also don't forget to import Mouse Event!
Like this:

```tsx
import { MouseEvent } from "react";
```

## Hook

Use State Hook to store data in the component. This hook is used to store data in the component or to update the data in the component. It is used to store data in the component that is not passed as a prop.

```tsx
const [selectedIndex, setSelectedIndex] = useState(-1);
```

This is how you can use the state hook to store data in the component. the first variable is the variable that you want to change, and the second variable is the methode that changes it.

## Props vs State

| PROPS | STATE |
| --- | --- |
|  Input passed to a component | Data managed by a component |
| Immutable | Mutable |
| Passed from parent to child | Managed by the component itself |
| Similar to function args | Similar to local variables |
| Cause a re-render when changed | Cause a re-render when changed |
