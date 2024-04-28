// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

function jsonAPI() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data))
}

function moreData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displyData(data))
}

function displyData(data) {
    console.log(data);
}