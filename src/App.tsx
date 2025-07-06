import { useState } from "react";
import Button from "./components/Button";
import ClosingAlert from "./components/ClosingAlert";

function App() {

const [displayerClass, setDisplayerClass] = useState('d-none');

  return (
    <div>
      <h1 className="p-4 m-2">Hello World</h1>
      <ClosingAlert displayClass={displayerClass} handleCloseAlert={() => setDisplayerClass('d-none') } />
      <Button onClick={() => setDisplayerClass('d-flex')}/>
    </div>
  );
}

export default App;
