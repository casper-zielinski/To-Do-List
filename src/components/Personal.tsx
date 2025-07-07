import React, { useState } from "react";

function Personal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={isHovered ? "text-primary-dark text-decoration-underline m-2" : "m-2"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Personal
    </div>
  );
}

export default Personal;
