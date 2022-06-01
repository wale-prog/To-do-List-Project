import { tasks } from './tasks.js';

export function createUI(text) {
  const taskSection = document.querySelector('.tasks-section');
  const taskUI = document.createElement('div');
  taskUI.classList.add('task-ui');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('check');

  const textPara = document.createElement('p');
  textPara.setAttribute('contenteditable', 'true');
  textPara.setAttribute('class', 'para');
  textPara.textContent = text.description;

  const ellipse = document.createElement('i');
  ellipse.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  ellipse.classList.add('icon', 'ellipse');

  const trash = document.createElement('i');
  trash.setAttribute('class', 'fa-solid fa-trash');
  trash.classList.add('hidden', 'icon', 'trash');

  taskUI.append(input, textPara, ellipse, trash);
  taskSection.appendChild(taskUI);
  return taskSection;
}

export function singleTaskDefault() {
  tasks.forEach((task) => {
    createUI(task);
  });
}