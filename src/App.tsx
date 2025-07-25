import Fitness from "./components/Fitness";
import General from "./components/General";
import Career from "./components/Career";
import Personal from "./components/Personal";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./styles/App.css";
import Main from "./components/Main/Main";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App font-inter text-center">
        <p className="bg-primary-dark text-primary-light p-2 fs-6 m-0">
          This is a simple To-Do-List or a Notes App
        </p>
        <nav className="navbar navbar-expand-lg bg-body-tertiary p-3 bg-primary-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link text-light">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/career" className="nav-link text-light">
                    Career
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/fitness" className="nav-link text-light">
                    Fitness
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/personal" className="nav-link text-light">
                    Personal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <h1 className="heading p-2 bg-light border border-black m-2 rounded">
          Your To-Do-List
        </h1>

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Fitness" element={<Fitness />} />
          <Route path="/General" element={<General />} />
          <Route path="/Career" element={<Career />} />
          <Route path="/Personal" element={<Personal />} />
        </Routes>
      </div>
    </Router>
  );
}
