function DisplayAllPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-contaienr')
    for(const post of posts){
        console.log(post);
        
        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h1>User:${post.id} </h1>
        <h5>Post-title:${post.title} </h5>
        <p>Post-title:${post.body} </p>
        `
        postContainer.appendChild(postDiv)
    }
}

DisplayAllPost()