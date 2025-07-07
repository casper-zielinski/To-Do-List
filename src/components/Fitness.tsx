import { useState } from "react";

function Fitness() {
  const [isHovered, setHover] = useState(false);

  return (
    <div
      className={
        isHovered ? "text-primary-dark text-decoration-underline m-2" : "m-2"
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      Fitness
    </div>
  );
}

export default Fitness;
