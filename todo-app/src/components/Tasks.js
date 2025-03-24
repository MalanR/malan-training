import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Task = ({task, toggleComplete, deleteTask, toggleEdit}) => {
    return (
        <div className="task">
            <p onClick={() => toggleComplete(task.id)} 
            className={`${task.completed ? 'completed':""}
            `}>{task.task}
            </p>
            <div className="task-icons">
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => toggleEdit(task.id)} style={{ color: 'yellow' }} />
                <FontAwesomeIcon icon={faTrash} onClick={() => deleteTask(task.id)} style={{ color: 'red' }} />
            </div>
        </div>
    );
};