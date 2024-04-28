function user2Data(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUserData(data))
}

function displayUserData(data){
    const liList = document.getElementById('li-list');

    for(const user of data){
        console.log(user);
        const li = document.createElement('li')
        const p = document.createElement('p')
        p.innerText = user.name
        li.innerText = user.username;
        liList.appendChild(p)
        liList.appendChild(li)
    }
}