const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const storageKey = 'tasks';
const clearBtn = document.getElementById('clearBtn');
let tasks = JSON.parse(localStorage.getItem(storageKey) || '[]');

function renderTasks() {
    taskList.replaceChildren();

    tasks.forEach((task) => {
        const p = document.createElement('p');
        p.textContent = task;
        taskList.appendChild(p);
    });
}

addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();

    if (!task) {
        return;
    }

    tasks.push(task);
    localStorage.setItem(storageKey, JSON.stringify(tasks));
    renderTasks();
    taskInput.value = '';
});

clearBtn.addEventListener('click', () => {
    tasks = [];
    localStorage.removeItem(storageKey);
    renderTasks();
});

renderTasks();