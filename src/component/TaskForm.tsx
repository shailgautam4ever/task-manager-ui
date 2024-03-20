import { ChangeEventHandler, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux-hooks";
import { createTask } from "../feature/taskSlice";
import { v4 as uuid } from "uuid";

const defaultTask = {
  name: "",
  priority: "low",
  isCompleted: false,
};
const TaskForm = () => {
  const [formData, setFormData] = useState(defaultTask);
  const [error, setError] = useState("");
  const { isEditing } = useAppSelector((s) => s.task);

  const dispatch = useAppDispatch();
  const handleOnChange: ChangeEventHandler<
    HTMLSelectElement | HTMLInputElement
  > = (e) => {
    const { name, value } = e.target;
    setFormData((curr) => ({
      ...curr,
      [name]: value,
    }));
    return;
  };

  const handleAddTask: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setError("Enter valid task name");
      return;
    }
    if (error) setError("");
    dispatch(
      createTask({
        id: uuid(),
        ...formData,
      })
    );
    setFormData(defaultTask);
  };

  return (
    <>
      <form className="task-form">
        <input
          value={formData.name}
          name="name"
          data-id="task-name-input"
          type="text"
          placeholder={isEditing ? "Add task" : "Add task"}
          onChange={handleOnChange}
        />
        <select
          onChange={handleOnChange}
          defaultValue="low"
          value={formData.priority}
          name="priority"
          data-id="task-select-input"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button data-id="task-add-btn" onClick={handleAddTask}>
          Add
        </button>
      </form>
      <span className="error-text">{error}</span>
    </>
  );
};

export default TaskForm;
