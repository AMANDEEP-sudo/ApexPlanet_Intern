// Load tasks from localStorage on page load
window.onload = function () {
    loadTasks();
};

function addTask() {
    const input = document.getElementById('taskInput');
    const task = input.value.trim();

    if (task !== '') {
        const tasks = getTasksFromStorage();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        input.value = '';
        loadTasks();
    }
}

function deleteTask(index) {
    const tasks = getTasksFromStorage();
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

function loadTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    const tasks = getTasksFromStorage();
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task}
            <button onclick="deleteTask(${index})">Delete</button>
        `;
        taskList.appendChild(li);
    });
}

function getTasksFromStorage() {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : [];
}
