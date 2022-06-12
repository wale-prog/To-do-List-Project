import { tasks } from './tasks.js';

export default function interactive() {
  const check = document.querySelectorAll('.check');
  check.forEach((input, index) => {
    input.addEventListener('change', (event) => {
      const paraNode = input.nextElementSibling;
      const parentPara = paraNode.parentElement;
      const completedArray = tasks.filter((task) => task.index === index + 1);
      if (event.target.checked) {
        paraNode.classList.add('line-through');
        parentPara.classList.add('checked');
        tasks[completedArray[0].index - 1].completed = true;
      } else {
        paraNode.classList.remove('line-through');
        parentPara.classList.remove('checked');
        tasks[completedArray[0].index - 1].completed = false;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
    const clearBtn = document.querySelector('.btn');
    const taskSection = document.querySelector('.tasks-section');
    clearBtn.addEventListener('click', () => {
      const checked = document.querySelectorAll('.checked');
      tasks = tasks.filter((task) => task.completed !== true);
      checked.forEach((task) => taskSection.removeChild(task));
      for (let i = 0; i < tasks.length; i += 1) {
        tasks[i].index = i + 1;
      }
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
}
