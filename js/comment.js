function commentPost(){
   fetch('https://jsonplaceholder.typicode.com/comments')
   .then(res=> res.json())
   .then(data => displayComment(data))
}

function displayComment(comments){
    const commentList = document.getElementById('comment-list')
   for(const comment of comments){
    console.log(comment);
    const commentDiv = document.createElement('div')
    commentDiv.classList.add('comment')
    commentDiv.innerHTML = `
    <h1>PostId:${comment.postId} </h1>
    <h5>Name:${comment.name} </h5>
    <p>Email:${comment.email} </p>
    <p>Body:${comment.body} </p>
    `
    commentList.appendChild(commentDiv)
   }
}




commentPost()