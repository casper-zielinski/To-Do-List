import { useState } from "react";

interface ButtonProps {
  onClick: () => void;
}

function Button({ onClick }: ButtonProps) {
  return (
    <button type="button" className="btn btn-primary m-2 p-2" onClick={onClick} >Base class</button>
  );
}

export default Button