import Fitness from "./components/Fitness";
import General from "./components/General";
import Career from "./components/Career";
import Personal from "./components/Personal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Main from "./components/Main/Main";

export default function App() {
  return (
    <div className="App font-inter text-center">
      <p className="bg-primary-dark text-primary-light p-2 fs-6 m-0">
        This is a simple To-Do-List or a Notes App
      </p>
      <div className="navbar p-3 bg-primary-light text-primary-light d-flex justify-content-around fs-3 gx-5 text-center">
        <General />
        <Fitness />
        <Career />
        <Personal />
      </div>
      <h1 className="p-2 bg-light border border-black m-2 rounded">
        Your To-Do-List
      </h1>
      <Main />
    </div>
  );
}
