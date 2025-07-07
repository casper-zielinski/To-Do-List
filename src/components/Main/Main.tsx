import { useState } from "react";
import AddNew from "./AddNew";
import List from "./List/List";

function Main() {
  let [elements, setElements] = useState<string[]>([]);

  return (
    <div className="Main p-3 bg-light border border-black m-2 rounded">
      <AddNew onClickAdd={() => setElements([...elements, "New Element"])}/>
      <List List={elements}/>
    </div>
  );
}

export default Main;
