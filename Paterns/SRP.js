// Task 2: Single Responsibility Principle (SRP)

// Modify the task management system to ensure that:

// Each function should only perform one responsibility.
// Avoid functions that both modify and display data.


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