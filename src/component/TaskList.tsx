import { useAppSelector } from "../hooks/redux-hooks";
import Modal from "./Modal";
import TaskDetails from "./TaskDetails";

const TaskList = () => {
  const { tasks } = useAppSelector((s) => s.task);
  console.log(tasks);
  return (
    <menu className="task-list">
      {tasks.map((value: any) => (
        <TaskDetails key={value.id} {...value} />
      ))}
      {tasks.length === 0 && <p className="no-item">No Task added yet!</p>}
      <Modal />
    </menu>
  );
};

export default TaskList;
