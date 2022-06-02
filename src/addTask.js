import Add from './add.js';
import { tasks } from './tasks.js';
import deleteTask from './deleteUI.js';
import editTask from './editTask.js';
import singleTaskDefault from './createUI.js';

function addTaskDetails() {
  const textInput = document.getElementById('input');
  const taskDescription = textInput.value;
  const taskSection = document.querySelector('.tasks-section');
  taskSection.innerHTML = '';
  if (taskDescription !== '') {
    const task = new Add(taskDescription, false, tasks.length + 1);
    tasks.push(task);
    singleTaskDefault();
    deleteTask();
    editTask();
    textInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function validateKeydown(event) {
  if (event.key === 'Enter') {
    const taskSection = document.querySelector('.tasks-section');
    taskSection.innerHTML = '';
    addTaskDetails();
  }
}

export default function addTasks() {
  const textInput = document.getElementById('input');
  textInput.addEventListener('keydown', (event) => validateKeydown(event));
  const returnBtn = document.querySelector('.return');
  returnBtn.addEventListener('click', () => addTaskDetails());
}
