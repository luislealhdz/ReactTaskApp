import Task from "./Task";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return <h1>Add hw</h1>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;
