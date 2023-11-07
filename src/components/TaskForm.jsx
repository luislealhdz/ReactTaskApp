import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Do homework"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
            />
            <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="New description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            ></textarea>
            <button>Save</button>
        </form>
    );
}

TaskForm.propTypes = {
    createTask: PropTypes.func.isRequired,
};

export default TaskForm;
