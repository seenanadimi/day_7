

function getJokeUrl(category){
    return `https://official-joke-api.appspot.com/jokes/${category}/ten`
}

fetch(getJokeUrl('programming'))
    .then(response=>response.json())
    .then(data=>{
        console.log(data)
        
        data.forEach(function(joke){
            const li = document.createElement('li');
            li.innerHTML = joke.setup;
            document.body.appendChild(li);
            console.log(li.innerHTML)
            li.addEventListener('click', function(){
                alert(joke.punchline);
            })
        })
    });