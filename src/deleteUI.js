import { tasks } from './tasks.js';

export default function deleteTask() {
  const taskDiv = document.querySelectorAll('.task-ui');
  const trash = document.querySelectorAll('.trash');
  const ellipse = document.querySelectorAll('.ellipse');
  const taskSection = document.querySelector('.tasks-section');

  for (let i = 0; i < taskDiv.length; i += 1) {
    taskDiv[i].addEventListener('click', () => {
      taskDiv[i].classList.toggle('highlight');
      trash[i].classList.toggle('hidden');
      ellipse[i].classList.toggle('hidden');
    });
  }

  trash.forEach((item, index) => {
    item.addEventListener('click', (event) => {
      const taskRemove = event.target.parentElement;
      taskSection.removeChild(taskRemove);
      tasks = tasks.filter((task) => task.index !== index + 1);
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}