 
 function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayData(data))
 }

 function displayData(data){
    const listItems = document.getElementById('list-items')
    for( const  user of data){
        console.log(user);
        const li = document.createElement('li')
        li.innerText = user.name;
        listItems.appendChild(li)
    }
 }