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

| if true | Parameted to do this | do this |
| --- | --- | --- |
| `items.length == 0` | ``&&`` | ``\<p>No item found</p>`` |

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

## Chanigng externally

If you want to change the state of a component externally, declare a Interface/Prompt like this in the child component:

```tsx
interface Props {
  displayClass?: string; // Optional property to control visibility --> achieved through ?
  handleCloseAlert: () => void; // click handler
}
```

with this, when you call the child component, you can pass the function like this:

```tsx

function App() {

const [displayerClass, setDisplayerClass] = useState('d-none');

const handleButtonClick = () => {
    setDisplayerClass('d-flex');
  };

const handleCloseAlert = () => {
    setDisplayerClass('d-none');
  };

  return (
    <div>
      <h1 className="p-4 m-2">Hello World</h1>
      <ClosingAlert displayClass={displayerClass} handleCloseAlert={handleCloseAlert} /> 
      <Button onClick={handleButtonClick}/>
    </div>
  );
}

export default App;

```

Here we see a function `handleCloseAlert` that is passed to the child component. This function is used to change the state of the child component (to display: none). This is a hook to change the state of the child component from the parent component, a hook function.

## Important Operator

- ``&&`` to check if a condition is true before executing a code block. It is a logical AND operator. It will only execute the code block if the condition is true, otherwise , it will skip it.

- ``||`` to check if a condition is false before executing a code block. It is a logical OR operator. It will only execute the code block if the condition is false, otherwise, it will skip it.

- ``??`` to check if a variable is null or undefined before executing a code block. It is a nullish coalescing operator. It will only execute the code block if the variable is null or undefined, otherwise, it will skip it.

- `?` a if statement that is shortend, it is used to check if a condition is true or false before executing a code block. The structure looks like this: `condition ? code block if true : code block if false`. It is a shorthand for if-else statement.

## Objects

When you want to pass an object variable to a variable, or many variables to a variable, you can use the {} operator. This is called object destructuring.

Example:

```js
const person = {
  name: 'John Doe',
  age: 30,
  isMarried: true,
};

const { name, age, isMarried } = person;
```

```js
const person = {
  name: 'John Doe',
  age: 30,
  isMarried: true,
};

const person2 = {...person, name: 'Jack Doe'};
```

In the first example, we are destructuring the object `person` and assigning its properties to the variables, `name`, `age`, and `isMarried`. In the second example, we are creating a new object `person2` that is a copy of `person` but with a different `name` property. This is called object spread operator. The `...` operator is used to spread the properties of an object into a new object.

The `...` operator als works for arrays. Here is an example:

```js
const name = ["Albert", "Beata", "Nelly"];
const name2 = [...name, "Jack"]; //The array now looks like: ["Albert", "Beata", "Nelly", "Jack"]
```

## Importing SVG files as React Components

1. Install plugin

```bash
npm install vite-plugin-svgr --save-dev
```

2. Add plugin to vite.config.js

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});
```

Important: Restart Server after adding the plugin. If you are using a IDE like Visual Studio Code, you can restart the server by clicking on the "Run Code" button in the top right corner of the screen.

3. Create in the src folder a file called svg.d.ts with the following content:

```ts
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
```

4. Now you can import your SVG files as React components in your React components. For example:

```tsx
import TrashIcon from '../../../trash-bin.svg?react';

function Trash() {
  return <TrashIcon width={30} height={30} />;
}

export default Trash;
```

5. Things to consider

- Make sure, that the SVG file is in the same directory as the component that is importing it.

- Make sure that the SVG file doesn't include any XML namespace declarations. If it does, you can remove them by using a tool like svgo, which optimizes SVG files by cleaning up unnecessary metadata, attributes, and XML declarations.

- You can install svgo globally via npm install -g svgo and run it with svgo your-file.svg.
