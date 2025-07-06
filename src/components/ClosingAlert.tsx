import { useState } from "react";

interface Props {
  displayClass?: string; // Optional property to control visibility
  handleCloseAlert: () => void; // Optional click handler
}

function ClosingAlert({ displayClass, handleCloseAlert }: Props) {
  return (
    <div
      className={
        "alert alert-warning alert-dismissible fade show " + displayClass
      }
      role="alert"
    >
      <strong>Holy guacamole!      - </strong> You should check in on some of those
      fields below.
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => {
          handleCloseAlert();
        }}
      ></button>
    </div>
  );
}

export default ClosingAlert;
