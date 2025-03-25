import React, {useState} from "react";
import '../TaskForm.css'

export const TodoForm = ({addTodo}) => {
    const [value, setValue ] = useState("")

    const handleSubmit = event => {
        event.preventDefault();
        
        addTodo(value)

        setValue("")
    }
    return (
        <form className="TaskForm" onSubmit={handleSubmit}>
            <input type="text" className="task-input task-input-margin" value = {value}
            placeholder="What are we getting done today ?" size="50" onChange=
            {(event) => setValue(event.target.value)}/>
            <button type="submit" className="todo-btn">Add Task</button>
        </form>
    )
};