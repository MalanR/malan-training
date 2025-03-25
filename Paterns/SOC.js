// Task 1: Separation of Concerns (SoC)

// Create a simple JavaScript program that simulates a task management system.

// Implement separate modules or functions for adding a task, removing a task, and displaying tasks.
// Ensure that each function only handles its specific concern.


class TaskManager {
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task)
    }

    updateTask(taskIndex, task){
        this.tasks[taskIndex] = task;
    }

    deleteTask(taskIndex){
        this.tasks.splice(taskIndex, 1);
    }

    displayTasks(tasks){
        console.log(this.tasks);
    }
}


const taskManager = new TaskManager();
taskManager.addTask('First Task');
taskManager.addTask('Second Task');
taskManager.addTask('Third Task');
taskManager.addTask('Final Task');
taskManager.displayTasks();
taskManager.updateTask(2, 'The Updated Task');
taskManager.deleteTask(3);
taskManager.displayTasks();
