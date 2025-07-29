import Header from "./Header";
import NavigationBar from "./NavigationBar";
import ToDoList from "./ToDoList";
import "./index.css";

export default function App() {
  return (
    <>
      <div className="all">
        <Header />
        <NavigationBar />
        <ToDoList />
      </div>
    </>
  );
}
