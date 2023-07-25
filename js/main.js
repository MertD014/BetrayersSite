var count = 0;
var increment = 1;

function increaseIncrement() {
    increment++;
}

function increaseCounter() {
    count += increment;
    document.getElementById('counter').innerText = count;
}