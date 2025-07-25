import { useState } from "react";
import AddNew from "./AddNew";
import ListComponent from "./List/List";
import "../../styles/App.css";

export interface ListItem {
  item: string;
  isChecked: boolean;
  due: string;
}

function Main() {
  const [List, setList] = useState<ListItem[]>([]);

  function addNewItem(item: string) {
    const newListItem: ListItem = {
      item: item,
      isChecked: false,
      due: new Date().toLocaleDateString(),
    };
    setList((prev: ListItem[]) => [...prev, newListItem]);
  }

  function deleteSpecificItem(index: number) {
    setList((prev: ListItem[]) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="Main p-3 bg-light border border-black m-2 rounded">
      <AddNew onClickAdd={addNewItem} />
      <ListComponent List={List} deleteTask={deleteSpecificItem} changer={<AddNew onClickAdd={addNewItem} />}/>
    </div>
  );
}

export default Main;
