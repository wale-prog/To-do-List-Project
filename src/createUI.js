import { tasks } from './tasks.js';

const createUI = ({ description }) => {
  const taskSection = document.querySelector('.tasks-section');
  const taskUI = document.createElement('div');
  taskUI.setAttribute('draggable', 'true');
  taskUI.classList.add('task-ui');

  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.classList.add('check');

  const textPara = document.createElement('p');
  textPara.setAttribute('contenteditable', 'true');
  textPara.setAttribute('class', 'para');
  textPara.textContent = description;

  const ellipse = document.createElement('i');
  ellipse.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
  ellipse.classList.add('icon', 'ellipse');

  const trash = document.createElement('i');
  trash.setAttribute('class', 'fa-solid fa-trash');
  trash.classList.add('hidden', 'icon', 'trash');

  taskUI.append(input, textPara, ellipse, trash);
  taskSection.appendChild(taskUI);
  return taskSection;
};

const singleTaskDefault = () => {
  tasks.forEach((task) => {
    createUI(task);
  });
};
export default singleTaskDefault;