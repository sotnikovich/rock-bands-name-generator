const button = document.querySelector('.button');
const name = document.querySelector('.name');
const rand = Math.floor(Math.random() * rockBands.length);

function random(array) {
    button.addEventListener('click', () => {
        name.textContent = (array[rand]);
    })
}

random(rockBands);