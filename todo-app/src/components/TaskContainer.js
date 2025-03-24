import React, {useState} from 'react';
import { Task } from './Tasks';
import { v4 as uuidv4 } from 'uuid';
import '../task-container.css';
import { TodoForm} from './TaskForm';
import { EditTaskForm } from './EditTaskForm';
uuidv4();

export const TaskContainer = () => {
  const [tasks, setTasks] = useState([])

  const addTask = task => {
    setTasks([...tasks, {
      id: uuidv4(),
      task: task,
      completed: false,
      isEditing: false}])
      console.log(tasks)
  }

const toggleComplete = id => {
  setTasks(tasks.map(task => task.id === id ? {
    ...task, completed: !task.completed} : task));
}

const deleteTask = id => {
  setTasks(tasks.filter(task => task.id !== id));
}

const editTask = (newTask, id) => {
  setTasks(tasks.map(task => task.id === id ? {
    ...task, task: newTask, isEditing: false} : task));
}

const toggleEdit = id => {
  setTasks(tasks.map(task => task.id === id ? {
    ...task, isEditing: !task.isEditing} : task));
}

  return (
    <div className="task-container">
        <h1><span className="T">T</span>asks.</h1>
      <TodoForm addTodo={addTask}/>
      {tasks.map((task, index) => (
        task.isEditing ? (
          <EditTaskForm editTask={editTask} task={task} key={index}/>
        ) : (
          <Task task={task} key={index} 
            toggleComplete={toggleComplete} 
            deleteTask={deleteTask}
            toggleEdit={toggleEdit}/>
        )
      ))}
    </div>
  );
}

export default TaskContainer;