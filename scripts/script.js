const button = document.querySelector('.button');
const name = document.querySelector('.name');

function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return name.textContent = arr[rand];
}

button.addEventListener('click', () => arrayRandElement(rockBands));