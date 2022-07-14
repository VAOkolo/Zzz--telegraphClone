const parentDiv = document.getElementsByClassName('row mb-2')[0]
let fetchUrl = 'http://localhost:3000/posts'
window.addEventListener('load', fetchData)


async function fetchData(){
    let response = await fetch(fetchUrl)
    let data = await response.json();
    appendResult(data.posts)
}

function appendResult(data){
    console.log(data)
    data.forEach(appendResults)
}

function appendResults(postData){
    const title = postData.title
    const alias = postData.alias
    const description = postData.description
    const date = postData.date

    //shortened post logic...
    descriptionArray = description.split(" ")
    console.log(descriptionArray)
    let slicedArray = descriptionArray.slice(0,15).join(' ')

    const targetDiv = document.createElement('div')
    targetDiv.setAttribute('class', "col-md-6")

    console.log(parentDiv)

    targetDiv.innerHTML = 
        `<div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${alias}</strong>
                <h3 class="mb-0">${title}</h3>
                <div class="mb-1 text-muted">${date}</div>
                <p class="card-text mb-auto">${slicedArray}...</p>
                <a href="#" class="stretched-link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
                <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            </div>
        </div>`

  console.log(targetDiv)

  parentDiv.appendChild(targetDiv)

}
