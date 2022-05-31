import './index.css';

const task = [
  {
    description: 'Draw out plans for the next day',
    completed: 'true',
    index: 1,
  },
  {
    description: 'Complete the Set-up with Webpack lesson ',
    completed: 'true',
    index: 2,
  },
  {
    description: 'Complete to Do list project',
    completed: 'false',
    index: 3,
  },
];

const listItems = () => {
  task.forEach((todo) => {
    const tasks = document.querySelector('.tasks');
    const taskDiv = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.classList.add('check');

    const ellipsis = document.createElement('i');
    ellipsis.setAttribute('class', 'fa-solid fa-ellipsis-vertical');
    ellipsis.classList.add('icon', 'ellipse');

    const description = document.createElement('p');
    description.classList.add('para');
    description.innerText = todo.description;

    taskDiv.classList.add('task-ui');
    taskDiv.append(input, description, ellipsis);
    tasks.appendChild(taskDiv);
  });
};
listItems();