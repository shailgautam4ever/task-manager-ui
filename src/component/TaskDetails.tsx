import {
  Task,
  removeTask,
  setIsEditting,
  toggleCompleteTask,
} from "../feature/taskSlice";
import { useAppDispatch } from "../hooks/redux-hooks";
import useModal from "../hooks/use-modal";
import Edit from "../icons/Edit";

const TaskDetails = ({ id, name, priority, isCompleted }: Task) => {
  const dispatch = useAppDispatch();
  const handleTaskRemove = () => {
    dispatch(removeTask(id));
  };

  const onToggleCheck = () => {
    dispatch(toggleCompleteTask(id));
  };
  const { show } = useModal();
  const handleEdit = () => {
    dispatch(setIsEditting({ id, name, priority, isEditing: true }));
    show();
  };
  return (
    <li className={`task-item ${priority}`}>
      <div className="task-info">
        <input
          onChange={onToggleCheck}
          className="task-check"
          type="checkbox"
          checked={isCompleted}
        />
        <span className={`${isCompleted ? "completed" : ""}`}>{name}</span>
      </div>
      <div className="action-container">
        <span className="action-btn" onClick={handleEdit}>
          ✏️
        </span>
        <span className="action-btn" onClick={handleTaskRemove}>
          🗑️
        </span>
      </div>
    </li>
  );
};

export default TaskDetails;
