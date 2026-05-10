const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task');
const taskContent = document.querySelector('.task-content');


addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); 
    

    if(taskText !== '') {
        const newTask = document.createElement('div');
        const deleteBtn = document.createElement('button');
        const checkBtn = document.createElement('button');
        
        newTask.classList.add('task-text');
        newTask.textContent = taskText;

        taskContent.appendChild(newTask);
        taskInput.value = '';


    }
});