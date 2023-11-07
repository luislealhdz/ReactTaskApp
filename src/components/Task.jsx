import PropTypes from "prop-types";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Task({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
};

export default Task;
