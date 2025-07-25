import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

interface AddNewProps {
  onClickAdd: (newElement: string) => void;
}

function AddNew({ onClickAdd }: AddNewProps) {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary m-4 p-2 d-flex fs-1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
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
