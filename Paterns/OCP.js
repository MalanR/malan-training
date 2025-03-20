// Task 3: Open/Closed Principle (OCP)

// Extend the task management system so that:

// The system allows new task filtering features (e.g., filter tasks by status: "completed" or "pending") without modifying existing functions.
// Demonstrate how you would extend functionality instead of modifying existing code.

class TaskManager {
    constructor(){
        this.tasks = [];
    }

    newTask(name, status){
        return {name, status};
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

    filterTasksByStatus(status){
        return this.tasks.filter(task => task.status === status);
    }
}


const taskManager = new TaskManager();
taskManager.addTask(taskManager.newTask('First Task', "completed"));
taskManager.addTask(taskManager.newTask('Second Task', 'pending'));
taskManager.addTask(taskManager.newTask('Third Task', 'pending'));
taskManager.addTask(taskManager.newTask('Final Task', 'completed'));
taskManager.displayTasks();
taskManager.updateTask(2, 'The Updated Task');
console.log('filtered tasks according to status (compelted):', taskManager.filterTasksByStatus('completed'));
console.log('filtered tasks according to status (pending):', taskManager.filterTasksByStatus('pending'));
taskManager.deleteTask(3);
taskManager.displayTasks();