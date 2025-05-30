import { useRef } from "react";

import Input from "./fragments/Input";
import Modal from "./Modal";
import Header2 from "./fragments/Header2";
import Paragraph2 from "./fragments/Paragraph2";

function NewProject({ onAdd, onCancelAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal} buttonCaption={"Close"}>
        <Header2 colorScheme={"darker"}>Invalid Input</Header2>
        <Paragraph2 colorScheme={"darker"}>
          Oops ... looks like you forgot to enter a value
        </Paragraph2>
        <Paragraph2 colorScheme={"darker"}>
          Please make sure yoy provide a valid value for every input
        </Paragraph2>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancelAdd}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input type="date" ref={dueDate} label="Due Date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
