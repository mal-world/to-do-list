document.addEventListener('DOMContentLoaded', loadTasks); // Corrected spelling

// Add task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); 

    if (taskText === '') {
        alert('Please insert your activity');
        return;
    }

    // Create task element
    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText; // Set text content correctly

    // Create delete icon
    const deleteIcon = document.createElement('span');
    deleteIcon.className = 'material-symbols-outlined';
    deleteIcon.textContent = 'delete';
    deleteIcon.onclick = function() {
        taskList.removeChild(taskItem);
        removeTaskFromStorage(taskText); 
    };

    // Append delete icon to the task item and add the item to the list
    taskItem.appendChild(deleteIcon);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = ''; 

    saveTaskToStorage(taskText); 
}

// Save a task to local storage
function saveTaskToStorage(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Load tasks from local storage and display them
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteIcon = document.createElement('span');
        deleteIcon.className = 'material-symbols-outlined';
        deleteIcon.textContent = 'delete';
        deleteIcon.onclick = function() {
            taskList.removeChild(taskItem);
            removeTaskFromStorage(taskText);
        };

        taskItem.appendChild(deleteIcon);
        taskList.appendChild(taskItem);
    });
}

// Remove a task from local storage
function removeTaskFromStorage(taskToDelete) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToDelete);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
