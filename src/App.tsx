import ToDoList from "./ToDoList";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="all">
        <h2 className="text-center mt-2 display-4 fw-light text-white">To-Do-List</h2>
        <ToDoList />
      </div>
    </>
  );
}
