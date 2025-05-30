import { useState } from "react";

function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') return;
    onAdd(enteredTask);
    setEnteredTask('');
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={enteredTask}
        onChange={handleChange}
        className="w-64 rounded-sm bg-stone-200 px-2 py-1"
      />
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}

export default NewTask;
