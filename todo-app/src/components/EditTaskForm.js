import React, {useState} from "react";
import '../TaskForm.css'

export const EditTaskForm = ({editTask, task}) => {
    const [value, setValue ] = useState(task.task); // Ensure task.task is the correct property

    const handleSubmit = event => {
        event.preventDefault();
        
        editTask(value, task.id);

        setValue("");
    }
    return (
        <form className="TaskForm" onSubmit={handleSubmit}>
            <input type="text" className="task-input task-input-margin" value={value}
            placeholder="Update Task" size="50" onChange=
            {(event) => setValue(event.target.value)}/>
            <button type="submit" className="todo-btn">Update Task</button>
        </form>
    )
};