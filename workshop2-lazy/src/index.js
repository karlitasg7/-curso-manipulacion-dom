import { registerImage, deleteAll } from './lazy';

const maximum = 122;
const minimum = 1;
const random = () => Math.floor(Math.random() * (maximum - minimum)) + minimum;

const createImageNode = () => {

    const container = document.createElement('div');
    container.className = 'p-4';

    const image = document.createElement('img');
    image.className = "mx-auto rounded-md bg-gray-300";
    image.width = '320';
    image.src =
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=";
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;

    container.appendChild(image);

    return container;
};

const mountNode = document.getElementById('images');

const addButton = document.getElementById('addButton');

const addImage = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
};

addButton.addEventListener('click', addImage);

const deleteAllImage = () => {
    mountNode.innerHTML = '';
    deleteAll();
};

const deleteAllButton = document.getElementById('deleteAllButton');
deleteAllButton.addEventListener('click', deleteAllImage);


