import { FormEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { updateTask } from "../feature/taskSlice";
import useModal from "../hooks/use-modal";

const TaskModal = () => {
  const { currentTask } = useAppSelector((s) => s.task);
  const dispatch = useAppDispatch();
  const { close } = useModal();
  const [error, setError] = useState("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updatedTask = Object.fromEntries(formData.entries());
    if (!updatedTask.name) {
      setError("Enter Valid Task");
      return;
    }
    if (error) setError("");
    dispatch(updateTask({ id: currentTask.id, ...updatedTask }));
    close();
  };

  return (
    <dialog id="task-modal">
      <h2>Edit Task</h2>
      <form className="task-form" onSubmit={handleSubmit}>
        <input defaultValue={currentTask.name} name="name" type="text" />
        <select defaultValue="low" name="priority">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Update</button>
      </form>
      {error && <span className="error-text">{error}</span>}
    </dialog>
  );
};

export default TaskModal;
