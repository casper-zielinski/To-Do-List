import { useEffect } from "react";

interface AddNewProps {
  onClickAdd: (newElement: string) => void;
}

function AddNew({ onClickAdd }: AddNewProps) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-4 p-2 d-flex fs-1"
        onClick={() => {
          onClickAdd("New Task");
        }}
      >
        +
      </button>
    </>
  );
}

export default AddNew;
