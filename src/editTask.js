import { tasks } from './tasks.js';

export default function editTask() {
  const para = document.querySelectorAll('.para');
  para.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextTask = item.textContent;
        tasks[index].description = nextTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        item.parentElement.classList.remove('highlight');
        item.nextElementSibling.classList.remove('hidden');
        item.nextElementSibling.nextElementSibling.classList.add('hidden');
      }
    });
  });
}
