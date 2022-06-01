import tasks from './tasks.js';

export default function editTask() {
  const para = document.querySelectorAll('.para');
  para.forEach((item) => {
    let previousTask = item.textContent;
    item.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        const nextTask = item.textContent;
        const focusedArray = tasks.filter((task) => task.description === previousTask);
        tasks[focusedArray[0].index - 1].description = nextTask;
        previousTask = nextTask;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    });
  });
}
